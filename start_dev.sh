#!/bin/bash
set -e

# Check dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Running npm install..."
  npm install
else
  # Quick check: if package.json is newer than node_modules, reinstall
  if [ "package.json" -nt "node_modules" ]; then
    echo "package.json has changed since last install. Running npm install..."
    npm install
  fi
fi

# Load local environment variables if .env.local exists
if [ -f .env.local ]; then
  export $(grep -v '^#' .env.local | xargs)
fi

npm run dev
