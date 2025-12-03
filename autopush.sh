#!/bin/bash

# Stop script when error happens
set -e

# Add all files
git add .

# Ask for commit message
echo "Commit message:"
read msg

git commit -m "$msg"

# Push to the current remote + current branch
git push

echo "✔ Done! Pushed to GitHub."
