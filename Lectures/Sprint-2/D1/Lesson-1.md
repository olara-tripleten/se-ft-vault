**Git and GitHub 101** Essential Version Control for Web Developers

---

**What is Version Control?**

Version control is like having a **time machine** for your code

<!-- element class="fragment" -->

- Track changes to files over time
- See what changed, when, and who made the change
- Revert to previous versions when needed
- Work collaboratively without conflicts

<!-- element class="fragment" -->

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

**Working with GitHub**

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

---

**Creating Your First Repository**

**On GitHub:**

1. Click "New Repository" <!-- element class="fragment" -->
2. Name your repository <!-- element class="fragment" -->
3. Add description (optional) <!-- element class="fragment" -->
4. Choose public or private <!-- element class="fragment" -->
5. Initialize with README <!-- element class="fragment" -->

<!-- element class="fragment" -->

**Locally:**

```bash
git clone https://github.com/username/repo-name.git
```

---

**Connecting Local and Remote**

<!-- element class="fragment" -->

```bash
# Add remote repository
git remote add origin https://github.com/username/repo-name.git
```

<!-- element class="fragment" -->

```bash
# Push your changes to GitHub
git push -u origin main
```

<!-- element class="fragment" -->

```bash
# Pull changes from GitHub
git pull origin main
```

---

**The Complete Workflow**

<!-- element class="fragment" -->

```bash
# 1. Make changes to files
echo "Hello World" > index.html
```

<!-- element class="fragment" -->

```bash
# 2. Stage changes
git add index.html
```

<!-- element class="fragment" -->

```bash
# 3. Commit with message
git commit -m "Add homepage structure"
```

<!-- element class="fragment" -->

```bash
# 4. Push to GitHub
git push origin main
```

---

**Best Practices**

<!-- element class="fragment" -->

**Commit Messages**

- Be descriptive and concise
- Use present tense: "Add navigation menu"
- Not: "Added navigation menu"

<!-- element class="fragment" -->

**Frequency**

- Commit early and often
- Each commit should represent a logical change

<!-- element class="fragment" -->

**Branching**

- Use branches for new features
- Keep main branch stable

---

**Common Git Commands Cheat Sheet**

<!-- element class="fragment" -->

```bash
git init                    # Initialize repository
git clone <url>            # Copy remote repository
git add <file>             # Stage changes
git commit -m "message"    # Save changes
git push origin main       # Upload to GitHub
git pull origin main       # Download from GitHub
git status                 # Check status
git log                    # View history
git branch                 # List branches
git checkout <branch>      # Switch branches
```

---

## Next Steps

- Configuring your github account
  - Create github account
  - Add SSH authentication
