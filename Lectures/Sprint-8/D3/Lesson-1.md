<style>
/* Custom Reveal.js Theme - Educational/Course Style */

/* Import a clean sans-serif font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Root variables for consistent theming */
:root {
  --bg-primary: #f5f4f0;
  --bg-secondary: #ffffff;
  --bg-accent: #000000;
  --text-primary: #2c2c2c;
  --text-secondary: #6b7280;
  --text-light: #9ca3af;
  --border-color: #e5e7eb;
  --shadow-light: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

/* Main reveal container */
.reveal {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-primary);
}

/* Slide backgrounds */
.reveal .slides {
  background: var(--bg-primary);
}

.reveal .slides section {
  background: var(--bg-primary);
  padding: 2rem;
  text-align: left;
}

/* Typography */
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-transform: none;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
}

.reveal h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.reveal h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.reveal h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.reveal p {
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  color: var(--text-primary);
}

/* Lists */
.reveal ul,
.reveal ol {
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
}

.reveal li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* Code blocks */
.reveal pre {
  background: var(--bg-accent);
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-medium);
  font-size: 0.9rem;
  line-height: 1.4;
}

.reveal code {
  background: var(--bg-accent);
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9em;
}

.reveal pre code {
  background: transparent;
  padding: 0;
}

/* Card-style content blocks */
.reveal .card {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: 2rem;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
}

/* Section numbers (like 01, 02, 03) */
.reveal .section-number {
  font-size: 3rem;
  font-weight: 300;
  color: var(--text-light);
  margin-right: 1rem;
  line-height: 1;
}

/* Progress indicators */
.reveal .progress-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Icon boxes (like the HTML/CSS diagram) */
.reveal .icon-box {
  background: var(--bg-accent);
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-medium);
}

.reveal .icon-box h3 {
  color: #ffffff;
  margin-bottom: 0;
}

/* Lesson/chapter listings */
.reveal .lesson-list {
  list-style: none;
  padding: 0;
}

.reveal .lesson-item {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.reveal .lesson-item:last-child {
  border-bottom: none;
}

.reveal .lesson-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-right: 1.5rem;
  min-width: 3rem;
}

.reveal .lesson-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.reveal .lesson-meta {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Completed items */
.reveal .completed {
  opacity: 0.7;
}

.reveal .completed::before {
  content: "✓";
  color: #10b981;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Navigation controls */
.reveal .controls {
  color: var(--text-secondary);
}

.reveal .controls button {
  color: var(--text-secondary);
}

.reveal .controls button:hover {
  color: var(--text-primary);
}

/* Progress bar */
.reveal .progress {
  background: var(--border-color);
}

.reveal .progress span {
  background: var(--bg-accent);
}

/* Slide numbers */
.reveal .slide-number {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
}

/* Custom utility classes */
.reveal .text-center {
  text-align: center;
}

.reveal .text-secondary {
  color: var(--text-secondary);
}

.reveal .text-light {
  color: var(--text-light);
}

.reveal .mb-large {
  margin-bottom: 3rem;
}

.reveal .mt-large {
  margin-top: 3rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .reveal {
    font-size: 16px;
  }
  
  .reveal h1 {
    font-size: 2rem;
  }
  
  .reveal h2 {
    font-size: 1.75rem;
  }
  
  .reveal .slides section {
    padding: 1rem;
  }
  
  .reveal .section-number {
    font-size: 2rem;
  }
}

/* Override default reveal styles */
.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.6;
  font-weight: inherit;
}

.reveal .slides section.has-dark-background,
.reveal .slides section.has-dark-background h1,
.reveal .slides section.has-dark-background h2,
.reveal .slides section.has-dark-background h3,
.reveal .slides section.has-dark-background h4,
.reveal .slides section.has-dark-background h5,
.reveal .slides section.has-dark-background h6 {
  color: #ffffff;
}
</style>

## Promises Recap

- Promises recap
- Using fetch

---

# Advanced Git

---

## Creating a New Branch

In Git, branching is a powerful mechanism that allows you to diverge from the main line of development and work on a new feature or bug fix in isolation. This keeps your main branch (often called `main` or `master`) clean and stable.

To create a new branch and switch to it in one command, you use:

<!-- element class="fragment" -->

```bash
git checkout -b <branch-name>
```

<!-- element class="fragment" -->

For example, `git checkout -b feature/add-login-form` creates a new branch called `feature/add-login-form` and immediately switches your working directory to it. Now, any commits you make will be on this new branch, leaving the `main` branch untouched.

## <!-- element class="fragment" -->
---
## Switching Branches

To switch between existing branches, you use the `git checkout` command followed by the branch name.

```bash
git checkout <branch-name>
```

<!-- element class="fragment" -->

When you switch branches, Git changes the files in your working directory to match the snapshot of the last commit in that branch. It's a good practice to commit or stash your changes before switching branches to avoid potential conflicts.

<!-- element class="fragment" -->

To see a list of all your local branches, you can use `git branch`.

<!-- element class="fragment" -->

---

## Merging Branches

Once you've completed your work on a feature branch, you'll want to integrate your changes back into the main branch. This is done with a merge.

First, switch to the branch you want to merge into (the target branch), which is usually `main`.

<!-- element class="fragment" -->

```bash
git checkout main
```

<!-- element class="fragment" -->

Then, run the `git merge` command with the name of the branch you want to merge from (the source branch).

<!-- element class="fragment" -->

```bash
git merge <branch-name>
```

<!-- element class="fragment" -->

This creates a new "merge commit" in the `main` branch that ties together the histories of both branches.

<!-- element class="fragment" -->

---

## Working with Remote Branches

Collaboration in Git revolves around remote repositories, which are versions of your project that are hosted on the internet or a network. To work with others, you need to manage remote branches.

<!-- element class="fragment" -->

- **`git fetch <remote>`:** This command downloads all the changes from the remote repository (new branches, new commits) but does _not_ merge them into your local branches. This is a safe way to see what others have been working on.

<!-- element class="fragment" -->

- **`git pull <remote> <branch>`:** This is equivalent to a `git fetch` followed by a `git merge`. It fetches the changes from the specified remote branch and immediately tries to merge them into your current local branch.

<!-- element class="fragment" -->

- **`git push <remote> <branch>`:** This command uploads your local branch's commits to the specified remote repository. This is how you share your work with others.

<!-- element class="fragment" -->

---

## Creating and Managing Pull Requests

A pull request (PR) is a formal way to propose changes to a repository. It's a feature of Git hosting platforms like GitHub, GitLab, and Bitbucket. A PR allows you to tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

**The typical workflow is:**

<!-- element class="fragment" -->

1.  Push your feature branch to the remote repository.

<!-- element class="fragment" -->

2.  Go to the repository on GitHub and open a pull request, comparing your feature branch with the `main` branch.

<!-- element class="fragment" -->

3.  Add a title and description, and request reviews from your teammates.

<!-- element class="fragment" -->

---

## Reviewing and Merging Pull Requests

Once a pull request is open, it serves as a forum for discussion and code review.

- **Code Review:** Team members can review your changes, add comments, and suggest improvements. This is a critical part of maintaining code quality.

<!-- element class="fragment" -->

- **Continuous Integration (CI):** Many projects are configured to automatically run tests on the changes in a PR. This ensures that the proposed changes don't break anything.

<!-- element class="fragment" -->

- **Merging:** Once the PR is approved and all checks have passed, it can be merged. This integrates the changes from your feature branch into the `main` branch. After merging, it's a good practice to delete the feature branch to keep the repository clean.

<!-- element class="fragment" -->
