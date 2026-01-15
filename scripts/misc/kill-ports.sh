#!/bin/bash

# Define the ports
PORTS=(4000 9001 9002 8080)

# Loop through each port and kill the process
for PORT in "${PORTS[@]}"; do
  PID=$(sudo lsof -t -i:$PORT)
  if [ -n "$PID" ]; then
    sudo kill -9 $PID
    echo "Killed process on port $PORT with PID $PID"
  else
    echo "No process found on port $PORT"
  fi
done
