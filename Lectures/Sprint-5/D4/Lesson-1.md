---
marp: true
---

# Intermediate Git + Spots Project

---

## The commit cycle

The commit cycle is the process of making changes to your code and saving them to your Git repository. It consists of three main steps:

1. **Modify:** Make changes to your files in the working directory.
2. **Stage:** Add the modified files to the staging area using `git add`. The staging area is a snapshot of your working directory that you want to include in your next commit.
3. **Commit:** Save the staged changes to your repository using `git commit`. Each commit is a snapshot of your repository at a specific point in time.

<!-- element class="fragment" -->

### Example:

```bash
# 1. Modify a file
echo "Hello, World!" > hello.txt

# 2. Stage the file
git add hello.txt

# 3. Commit the changes
git commit -m "Add hello.txt"
```

---

## The commit logs and hashes

- `git log`: Shows the commit history of your repository. Each commit has a unique hash, an author, a date, and a commit message.
- **Commit hash:** A unique identifier for each commit. You can use the commit hash to refer to a specific commit in other Git commands.

<!-- element class="fragment" -->

### `git log` Example:

```bash
git log

commit 1234567890abcdef1234567890abcdef12345678
Author: John Doe <john.doe@example.com>
Date:   Mon Jan 1 00:00:00 2024 +0000

    Add hello.txt
```

---

## Inspecting changes: git diff

- `git diff`: Shows the differences between your working directory and the staging area. This is useful for seeing the changes you have made since the last time you staged your files.
- `git diff --staged`: Shows the differences between the staging area and the last commit. This is useful for seeing the changes that you are about to commit.
- `git diff <commit1> <commit2>`: Shows the differences between two commits. This is useful for seeing the changes that were made between two points in time.

---

## If the commit goes wrong(ammend, reset, revert)

- `git commit --amend`: Amends the last commit. This is useful if you forgot to include a file or made a mistake in the commit message. It's important to note that you should only amend commits that have not been pushed to a remote repository.
- `git reset`: Resets the current HEAD to a specified state. This can be used to unstage files, or to undo commits. There are three modes of `git reset`: `--soft`, `--mixed`, and `--hard`. Be careful when using `git reset --hard`, as it will discard all changes in your working directory.
- `git revert`: Creates a new commit that undoes the changes from a previous commit. This is a safer way to undo changes than `git reset`, as it does not rewrite the commit history. This is the recommended way to undo changes that have already been pushed to a remote repository.

---

## Project: Spots
