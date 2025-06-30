<style>

</style>
## Coffeeshop Stage 3
- Project Overview
- Header
- About
- Refactor

note:
#sprint-1 #project
---
Header

![[Image.png]]

---

## About
![[Image-2.png]]![[Image-3.png]]

---
## Refactor

**Refactor** your `css` code to follow the BEM file structure convention
**Refactor:* update code structure without changing the functionality/outcome

---
Step 1: Create the `blocks` folder
- From the terminal: `mkdir blocks`
- Or clicking on vscode create folder vscode button
---
Step 2: Create one `.css` file for each block there is on your website
- On the terminal: `touch blocks/file-name.css`
- Or clicking on the create file vscode button
---
Step 3: Move all the relevant code to the correspondant `block.css` file

```
some_project/
├── blocks/
│   ├── header.css
│   ├── footer.css
│   ├── logo.css
│   ├── page.css
│   └── menu.css
├── pages/
│   └── index.css
└── index.html
```
---
Step 4: Import each of the css files into the `index.css` file
```css
/*
Syntax:
@import ../path/to/block.css
*/
@import "../blocks/page.css"
```
---
