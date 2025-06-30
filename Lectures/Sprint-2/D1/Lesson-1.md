

<style>
	* {
		width: 100%;
			text-align: start;
	}
	.controls{
		width: auto;
		text-align: end;
	}
	h1 {
		position: absolute;
		top: 0px;
		left: 0px;
		font-size: 24px !important;
		
	}
	h2 {
		font-size: 48px !important;
		font-weight: light;
	}
	
	p, li {
		font-size: 32px;
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


