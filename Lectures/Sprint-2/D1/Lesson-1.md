


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


- **Terminal 101**
- **Git and GitHub 101** Essential Version Control for Web Developers
---
**What is the Terminal or CLI?**

- A **text-based interface** to interact with your computer
    
- You type commands instead of using a mouse
    
- Powerful for developers and automation
    

<!-- element class="fragment" -->

**Why use it?**
<!-- element class="fragment" -->

- Faster than GUI for many tasks
    
- Gives more control over your system
    
- Essential for tools like Git, npm, etc.

<!-- element class="fragment" -->
---

## **Basic Terminal Navigation**

**`cd` = "Change Directory"**

- Lets you move around folders
  
```sh
cd folder-name       # Move into a folder 
cd ..                # Go up one level cd /path/to/folder   # Go to a specific path
```


**Check where you are:**


```sh
pwd   # Print working directory
```
---
## **Deleting Files and Folders**

**Delete a file:**

```sh
rm file.txt
```

**Delete a folder and its contents:**

```sh
rm -rf my-folder
```

⚠️ Be careful — deletion is permanent in the terminal!
<!-- element class="fragment" -->

---
## **Creating Files and Folders**

**Make new folders:**

```sh
mkdir my-folder
```

**Create new files:**

```sh
touch file.txt         # For code files or notes echo "Hello" > file.md # Add content while creating
```

You can also open files with a code editor:

```sh
code file.txt   # Opens file in VS Code
```

---
**What is Version Control?**

Version control is like having a **time machine** for your code


- Track changes to files over time
- See what changed, when, and who made the change
- Revert to previous versions when needed
- Work collaboratively without conflicts


---

**Why Do We Need Version Control?**

![Version Control Benefits](https://git-scm.com/images/about/branches@2x.png)

---

**Meet Git**

**Git** is a distributed version control system

- Created by Linus Torvalds (Linux creator) in 2005
- Tracks changes in your project files
- Works locally on your computer
- Industry standard for software development

<!-- element class="fragment" -->

---

**Git vs GitHub: What's the Difference?**

**Git** = The tool (software)

- Runs on your computer
- Tracks file changes
- Manages versions locally

<!-- element class="fragment" -->

**GitHub** = The platform (cloud service)

<!-- element class="fragment" -->

- Hosts Git repositories online
- Provides collaboration features
- Social coding platform

<!-- element class="fragment" -->

note: **Analogy**: Git is like a camera, GitHub is like Instagram

---

**Git Repository Structure**

![Git Repository Structure](https://git-scm.com/images/about/index1@2x.png)

---

**The Three States of Git**

**Working Directory**

- Your project files as you edit them <!-- element class="fragment" -->

**Staging Area (Index)** <!-- element class="fragment" -->

- Files prepared for the next commit <!-- element class="fragment" -->

**Repository (.git directory) ** <!-- element class="fragment" -->

- Permanent snapshots of your project <!-- element class="fragment" -->

---

**Basic Git Workflow**

```bash
# 1. Initialize a repository
git init
```

<!-- element class="fragment" -->

```bash
# 2. Add files to staging area
git add filename.txt
git add .  # Add all files
```

<!-- element class="fragment" -->

```bash
# 3. Commit changes
git commit -m "Your commit message"
```

<!-- element class="fragment" -->

```bash
# 4. Check status anytime
git status
```

<!-- element class="fragment" -->

---

**Essential Git Commands**

```bash
# Check repository status
git status
```

<!-- element class="fragment" -->

```bash
# View commit history
git log
git log --oneline  # Compact view
```

<!-- element class="fragment" -->

```bash
# See changes before staging
git diff
```

<!-- element class="fragment" -->

```bash
# Remove files from staging
git reset filename.txt
```

<!-- element class="fragment" -->

---

**Understanding Branches**

**Branches** let you work on different features simultaneously

<!-- element class="fragment" -->

```bash
# Create and switch to new branch
git checkout -b feature-navbar
```

<!-- element class="fragment" -->

```bash
# List all branches
git branch
```

<!-- element class="fragment" -->

```bash
# Switch between branches
git checkout main
git checkout feature-navbar
```

<!-- element class="fragment" -->

---

**Branch Workflow Visualization**

![Git Branching](https://git-scm.com/images/about/branches@2x.png)

---

**Merging Branches**

```bash
# Switch to main branch
git checkout main
```

<!-- element class="fragment" -->

```bash
# Merge feature branch
git merge feature-navbar
```

<!-- element class="fragment" -->

```bash
# Delete merged branch
git branch -d feature-navbar
```

<!-- element class="fragment" -->

---

![[tt-logo.svg]]