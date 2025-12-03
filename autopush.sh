#!/bin/bash

# Stop script when error happens
set -e

# Ask for repo name
echo "Enter GitHub repository URL (SSH or HTTPS):"
read repo

# Initialize git if not already
git init

# Set the remote origin
git remote remove origin >/dev/null 2>&1 || true
git remote add origin "$repo"

# Add all files
git add .

# Commit with message
echo "Enter commit message:"
read msg
git commit -m "$msg"

# Push
git branch -M main
git push -u origin main

echo "✔ Done! Your project is now pushed to GitHub."
