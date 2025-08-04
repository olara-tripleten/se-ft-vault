---
marp: true
---

---

**Today's Learning Objectives**

- Master smooth transitions for professional animations
- Implement shadow effects for depth and visual hierarchy
- Create linear and radial gradients for dynamic backgrounds
- Control content visibility with overflow properties
- Build complex animations using keyframes
- Explore essential introductory animation techniques

---

**Smooth Transitions** Creating seamless property changes

Transitions allow smooth changes between CSS property values over time

<!-- element class="fragment" -->

```css
.button {
  background-color: #3498db;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
}
```

<!-- element class="fragment" -->

**Key Properties:**

- `transition-property`: Which properties to animate
- `transition-duration`: How long the transition takes
- `transition-timing-function`: Speed curve of the transition

<!-- element class="fragment" -->

---

**Transition Timing Functions** Controlling animation speed curves

```css
.card {
  transform: translateY(0);
  transition: transform 0.4s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}
```

<!-- element class="fragment" -->

**Common timing functions:**

- `ease`: Slow start, fast middle, slow end
- `linear`: Constant speed
- `ease-in`: Slow start, then fast
- `ease-out`: Fast start, then slow
- `cubic-bezier()`: Custom timing curves

<!-- element class="fragment" -->

---

**Multiple Property Transitions** Animating several properties simultaneously

```css
.card {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: all 0.3s ease;
}

.card:hover {
  background-color: #f8f9fa;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}
```

<!-- element class="fragment" -->

**Best Practice:** Specify individual properties instead of `all` for better performance

<!-- element class="fragment" -->

---

**CSS Shadows** Adding depth and visual hierarchy

**Box Shadow Syntax:** <!-- element class="fragment" -->

```css
box-shadow: h-offset v-offset blur spread color;
```

<!-- element class="fragment" -->

```css
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card--elevated {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card--floating {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 12px 20px rgba(0, 0, 0, 0.08);
}
```

<!-- element class="fragment" -->

---

**Animated Shadow Effects** Creating dynamic depth changes

```css
.button {
  background-color: #3498db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.button:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
```

<!-- element class="fragment" -->

**Text Shadow for Typography:** <!-- element class="fragment" -->

```css
.heading {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

<!-- element class="fragment" -->

---

**Linear Gradients** Creating smooth color transitions

**Basic Linear Gradient:** <!-- element class="fragment" -->

```css
.gradient-bg {
  background: linear-gradient(to right, #3498db, #2ecc71);
}
```

<!-- element class="fragment" -->

**Directional Control:** <!-- element class="fragment" -->

```css
.gradient-bg--vertical {
  background: linear-gradient(to bottom, #e74c3c, #f39c12);
}

.gradient-bg--diagonal {
  background: linear-gradient(45deg, #9b59b6, #3498db);
}

.gradient-bg--angle {
  background: linear-gradient(135deg, #667eea, #764ba2);
}
```

---

## Tripleten Coffeeshop

- Project Overview <!-- element class="fragment" -->
- Delivering via Github <!-- element class="fragment" -->
- Work on the project <!-- element class="fragment" -->

---

## Stage 1

During this stage you'll be working on the **Recipes Section** of the Tripleten Coffeeshop Landing Page

---

![[Screenshot 2025-05-30 at 2.43.00 PM.png]]

---

## Delivering via github

- Clone Repository
- Open on vscode
- Make the required updates
- Push the changes

---

# Clone repository

- Go to your github repositories and find `se_project_coffeeshop`
  ![[Screenshot 2025-05-30 at 3.00.25 PM.png]]

---

- Copy the SSH Link
  ![[Screenshot 2025-05-30 at 3.04.23 PM.png]]

---

- Open your terminal and navigate to your projects folder

```sh
cd ~/Documents/tripleten
```

- Clone the github repository into your computer

```sh
git clone git@github.com/{{GITHUB_USER}}/se_project_coffeeshop
```

- This will create a new folder inside of the `tripleten` folder. You need to cd into is

```sh
cd se_project_coffeeshop
# To Open VSCode
code .
```

---

## Work on the project...

---

## Pushing changes to github

After finishing the changes on the project you need to sync your local changes with github's repository.

```sh
# Moves the changes to the staging area
git add -A

# Creates a new commit on the repository with the changes
git commit -m "Add recipes html & css"

# Push the changes into github
git push -u origin main
```

---

![[tt-logo.svg]]
