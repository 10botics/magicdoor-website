#!/usr/bin/env bash

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$PROJECT_DIR/.next-dev.pid"
LOG_FILE="$PROJECT_DIR/.next-dev.log"
PORT="${1:-3000}"

cd "$PROJECT_DIR"

if [[ -f "$PID_FILE" ]]; then
  EXISTING_PID="$(cat "$PID_FILE")"
  if kill -0 "$EXISTING_PID" >/dev/null 2>&1; then
    echo "Dev server is already running (PID $EXISTING_PID)."
    echo "Logs: $LOG_FILE"
    exit 0
  else
    rm -f "$PID_FILE"
  fi
fi

if lsof -i :"$PORT" -sTCP:LISTEN -n -P >/dev/null 2>&1; then
  echo "Port $PORT is already in use. Free it first or pass another port:"
  echo "  ./run-dev-bg.sh 3001"
  exit 1
fi

echo "Starting Next.js dev server in background on port $PORT..."
nohup env WATCHPACK_POLLING=true npm run dev -- -p "$PORT" >"$LOG_FILE" 2>&1 &
NEW_PID=$!
echo "$NEW_PID" >"$PID_FILE"

sleep 1
if kill -0 "$NEW_PID" >/dev/null 2>&1; then
  echo "Started successfully (PID $NEW_PID)."
  echo "URL: http://localhost:$PORT"
  echo "Logs: $LOG_FILE"
  echo "PID file: $PID_FILE"
else
  echo "Failed to start. Check logs: $LOG_FILE"
  exit 1
fi
