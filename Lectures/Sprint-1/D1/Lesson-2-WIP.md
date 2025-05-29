

<style>
	* {
		width: 100%;
		text-align: start;
	}
	.controls{
		width: auto;
		text-align: end;
	}
	code {
		text-align: start;
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

## Flexbox & BEM
- Revisit flexbox concepts
- BEM naming convention
note: This uses some styles to create a more custom layout
---
# Flexbox
## **Fundamentals Review**

Core properties that control flex container behavior

flex-direction: Controls the main axis direction <!-- element class="fragment" -->

justify-content: Aligns items along the main axis <!-- element class="fragment" -->

align-items: Aligns items along the cross axis <!-- element class="fragment" -->

---

# Flexbox

Essential properties for flex containers
```css
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```
```css
.flex-container {
  flex-wrap: wrap;
  align-content: space-between;
  gap: 1rem;
}
```
<!-- element class="fragment" -->

---
# Flexbox
**Flex Item Properties**

Controlling individual flex items

```css
.flex-item {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 200px;
}
```



**Shorthand syntax:**
<!-- element class="fragment" -->
```css
.flex-item {
  flex: 1 0 200px; /* grow shrink basis */
}
```

<!-- element class="fragment" -->

---
# Flexbox

**Flex Item Common patterns**

- `flex: 1` - Equal distribution 
- `flex: 0 0 auto` - No grow/shrink, natural size

---
# Flexbox
**Practical Flexbox Example**


```html
<nav class="navbar">
  <div class="navbar__logo">Brand</div>
  <ul class="navbar__menu">
    <li class="navbar__item">Home</li>
    <li class="navbar__item">About</li>
    <li class="navbar__item">Contact</li>
  </ul>
</nav>
```

<!-- element class="fragment" -->

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
```
<!-- element class="fragment" -->

---

## BEM Methodology
***B***lock - ***E***lement - ***M***odifier

---
# BEM Methodology

It helps by:
- Reusable Components
- Maintainable code structure
- Clear relationship between CSS classes
---
# BEM Methodology

The BEM structure
- **Block**: Stand alone component
- Element: Part of a block
- Modifier: Variation of block/element
---
# BEM Methodology

BEM Syntax example:
```css
.block {}

.block__element {}

.block__element_modifier {}
```
---

**General Naming Rules:**
- Use lowercase letters
- Separate words with hyphens: `navigation-bar`
- Should be meaningful and descriptive
---
# BEM Methodology
**BEM Block Structure**

**Block** represents a standalone component:

```css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}
```

```html
<div class="card">
  <!-- Card content -->
</div>
```
<!-- element class="fragment" -->


---
# BEM Methodology

**BEM Element Structure**

**Element** is a part of a block: `block__element`
<!-- element class="fragment" -->

```css
.card__header {
  font-size: 1.5rem;
  font-weight: bold;
}
.card__content {
  margin: 1rem 0;
  line-height: 1.6;
}
.card__footer {
  text-align: right;
  color: #666;
}
```
---


```html
<div class="card">
  <div class="card__header">Card Title</div>
  <div class="card__content">Card description text</div>
  <div class="card__footer">Footer info</div>
</div>
```

---
# BEM Methodology
**BEM Modifier Structure**

Variations and states

**Modifier** changes appearance or behavior: `block_modifier` or `block__element_modifier`
<!-- element class="fragment" -->
```css
.card_featured {
  border-color: #007bff;
  box-shadow: 0 4px 8px rgba(0,123,255,0.3);
}
.card_large {
  padding: 2rem;
  font-size: 1.1rem;
}
.card__header_centered {
  text-align: center;
}
```
<!-- element class="fragment" -->

---
Identify BEM Elements / **Menu**

![[Screenshot 2025-05-29 at 4.47.41 PM.png]]
---
Starting code
```html
<header>
	<nav>
		<ul>
			<li>
				<a href="#">Home</a>
			</li>
			<li>
				<a href="#">About</a>
			</li>
			<li>
				<a href="#">Contact</a>
			</li>
		</ul>
	</nav>
</header>
```
```html
<main>
	<h1>Welcome to the Home Page</h1>
	<p>This is a practice page for BEM modifiers.</p>
</main>
```
note: Jump to vscode and solve the practice
---
Identify BEM Elements / Card