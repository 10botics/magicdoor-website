#!/bin/bash
# Load local environment variables if .env.local exists
if [ -f .env.local ]; then
  export $(grep -v '^#' .env.local | xargs)
fi

npm run dev
