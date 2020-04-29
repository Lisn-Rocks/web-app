#!/bin/bash
  
echo $(date)

if ([ "$(git pull)" != "Already up to date." ] || [ ! -d "node_modules" ]); then
        npm install
        npm run build
fi
