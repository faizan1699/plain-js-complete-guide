#!/bin/bash
# Script to keep only faizan1699's commits
# Uses git rebase with a pre-written todo list

set -e

echo "=== Analyzing commits ==="
git log --oneline --all --format="%h %an %s"
echo ""

# Create backup
BACKUP_BRANCH="backup-$(date +%Y%m%d-%H%M%S)"
git branch "$BACKUP_BRANCH"
echo "✓ Backup created: $BACKUP_BRANCH"
echo ""

# Get all commits in reverse order (oldest first)
ALL_COMMITS=$(git log --reverse --format="%h|%an|%s")

# Create rebase todo file
TODO_FILE=$(mktemp)
echo "# Rebase todo - keeping only faizan1699 commits" > "$TODO_FILE"

while IFS='|' read -r hash author subject; do
    if [ "$author" = "faizan1699" ]; then
        echo "pick $hash $subject" >> "$TODO_FILE"
    elif [ "$author" = "MuhammadBurhanHaseeb" ]; then
        echo "drop $hash $subject" >> "$TODO_FILE"
    else
        echo "pick $hash $subject" >> "$TODO_FILE"
    fi
done <<< "$ALL_COMMITS"

echo "=== Rebase plan ==="
cat "$TODO_FILE"
echo ""

read -p "Proceed with rebase? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled. Backup branch: $BACKUP_BRANCH"
    rm -f "$TODO_FILE"
    exit 1
fi

echo ""
echo "=== Starting rebase ==="
# Use the todo file with git rebase
GIT_SEQUENCE_EDITOR="cp $TODO_FILE" git rebase --rebase-merges --root --interactive

rm -f "$TODO_FILE"

echo ""
echo "=== Rebase complete! ==="
echo "Backup branch: $BACKUP_BRANCH"
echo ""
echo "Current commits:"
git log --oneline --format="%h %an %s"

