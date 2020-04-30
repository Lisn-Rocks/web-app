#!/bin/bash
  
echo $(date)

git_pull_response=$(git pull)

# Only run `npm install` when `package-lock.json` file has been updated.
if git show | grep -Fq "package-lock.json"; then
	npm install
fi

# Only run `npm run build` if `git pull` actually pulls something new.
if [ "$git_pull_response" != "Already up to date." ]; then
        npm run build
fi
