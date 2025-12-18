#!/bin/bash
# Fixed version of the rebase command
# Replaces deprecated -p flag with --rebase-merges
# Properly handles rebasing commits by MuhammadBurhanHaseeb

# Get all commits by the author
COMMITS=$(git log --author="MuhammadBurhanHaseeb" --pretty=format:"%h")
FIRST_COMMIT=$(echo "$COMMITS" | tail -1)
LAST_COMMIT=$(echo "$COMMITS" | head -1)

echo "First commit by author: $FIRST_COMMIT"
echo "Last commit by author: $LAST_COMMIT"
echo "All commits:"
echo "$COMMITS"

# Since the first commit is a root commit, use --root to rebase from the beginning
# This will allow you to interactively rebase all commits including the root
echo ""
echo "Running interactive rebase with --rebase-merges (replacing deprecated -p flag)..."
git rebase --rebase-merges --root --interactive

