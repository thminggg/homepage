#!/bin/bash

# Ensure the GitHub CLI is installed
if ! command -v gh &> /dev/null
then
    echo "GitHub CLI (gh) could not be found. Please install it to proceed."
    exit 1
fi

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo "GITHUB_TOKEN environment variable is not set. Please set it to proceed."
    exit 1
fi

# Load .env.firebase file and extract GITHUB_USER and GITHUB_REPO_NAME
if [ -f .env.firebase ]; then
  gh secret set -f .env.firebase
else
    echo ".env.firebase file not found. Please ensure it exists in the script directory."
    exit 1
fi

echo "All secrets have been added to the GitHub repository."
