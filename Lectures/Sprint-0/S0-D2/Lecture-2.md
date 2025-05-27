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
## CSS: Classes, Browser Styles & Layout 
- Working with CSS classes and selectors <!-- element class="fragment" -->
- Understanding default browser styles <!-- element class="fragment" -->
- Mastering Document Flow and layout <!-- element class="fragment" -->
- Box model <!-- element class="fragment" -->
- Margin vs padding <!-- element class="fragment" -->
- block vs inline <!-- element class="fragment" -->
---
## **CSS Classes Fundamentals**

Organizing and applying styles efficiently
<!-- element class="fragment" -->

---
# **CSS Classes Fundamentals**
Basic Class Definitions
```css
.company-paragraph {
	color: blue;
	font-size: 18px;
}
```

Usage in html
<!-- element class="fragment" -->
```html
<p class="my-class">This paragraph uses the my-class style</p>
<div class="my-class">This div also uses my-class</div>
```
<!-- element class="fragment" -->

---
# **CSS Classes Fundamentals**
Basic class definition
- Classes are **reusable** across multiple elements
- Use **descriptive names** that explain the purpose
- Classes start with a **dot( . )** in **CSS**
note: We'll go back to naming conventions further down the bootcamp
---
# **CSS Classes Fundamentals**
## Multiple classes

_Combining styles for Flexibility_

```css
.text-large {
	font-size: 24px;
}

.text-primary {
	color: blue;
}

.text-secondary {
	color: rgba(0,0,0,0.8);
}
```
---
# **CSS Classes Fundamentals**
Combining Multiple classes:
```html
<h2 class="text-large text-primary">Title</h2>
<p class="text-large text-secondary">
	Lorem Ipsum
</p>
```
- Elements can have multiple classes <!-- element class="fragment" -->
- Classes combine their effects <!-- element class="fragment" -->
---
**Default Browser Styles**

Browsers apply a series of default styles to some elements

---
# **Default Browser Styles**
What browsers apply by default
```css {hl_lines=[1, 2, 3]}
body {
  margin: 8px;       /* Default body margin */
}

h1 {
  font-size: 2em;    /* Default heading size */
  margin: 0.67em 0;  /* Default heading margins */
  font-weight: bold; /* Default heading weight */
}

p {
  margin: 1em 0;     /* Default paragraph margins */
}
```
<!-- element class="fragment" -->

---
# **Default Browser Styles**
What browsers apply by default

```css {hl_lines=[5, 6, 7, 8, 9]}
body {
  margin: 8px;       /* Default body margin */
}

h1 {
  font-size: 2em;    /* Default heading size */
  margin: 0.67em 0;  /* Default heading margins */
  font-weight: bold; /* Default heading weight */
}

p {
  margin: 1em 0;     /* Default paragraph margins */
}
```
---
# **Default Browser Styles**
What browsers apply by default
```css {hl_lines=[11, 12, 13]}
body {
  margin: 8px;       /* Default body margin */
}

h1 {
  font-size: 2em;    /* Default heading size */
  margin: 0.67em 0;  /* Default heading margins */
  font-weight: bold; /* Default heading weight */
}

p {
  margin: 1em 0;     /* Default paragraph margins */
}
```
---
# **Default Browser Styles**
Why it matters
- Every browser has built-in styles
- They create inconsistencies between browsers
- They affect how your elements look
---
# **Default Browser Styles**
## Resetting default browser

Basic Reset:
<!-- element class="fragment" -->
```css
* { 
	margin: 0;
	padding: 0; 
	box-sizing: border-box; 
}
```
<!-- element class="fragment" -->

---
# **Default Browser Styles**
## Issues with this:
- Extremely basic
- Doesn't reset all the styles
- Only takes a couple of properties into consideration
---
# **Default Browser Styles**

## Better Approach:

Use **third party** `normalize.css` to reset and normalize defaults  https://necolas.github.io/normalize.css/
<!-- element class="fragment" -->

Used by **Twitter, Github, Soundcloud, Guardian, Medium, Bootstrap**
<!-- element class="fragment" -->

---
**Document Flow Basics**

How elements naturally arrange themselves

---
# **Document Flow Basics**
Normal Document Flow
```html
<h1>This is a heading</h1>
<p>This is a paragraph that flows after the heading.</p>
<p>This paragraph flows after the previous paragraph.</p>
<span>This span</span> <span>flows inline</span> <span>with other spans.</span>
```
<!-- element class="fragment" -->

---
# **Document Flow Basics**
Normal Document Flow
```md
# This is a heading
This is a paragraph that flows after the heading.

This paragraph flows after the previous paragraph.

This span flows inline with other spans.
```

- Elements flow **top to bottom**, **left to right** 
- **Block elements** stack vertically
- **Inline elements** flow horizontally

---
## **The Box Model**

Understanding element spacing

---
# **The Box Model**

Example:
```html
<div class="box-model">
	Hello World
</div>
```

```css
.box-example {
  padding: 20px;    /* Space inside the element */
  border: 2px solid #333;
  margin: 15px;     /* Space outside the element */
}
```
<!-- element class="fragment" -->

---
# **The Box Model**
- Content: The actual text, image 
- Padding: Inner Spacing <!-- element class="fragment" -->
- Border: The elements border line <!-- element class="fragment" -->
- Margin: Outer Spacing <!-- element class="fragment" -->
---
# **The Box Model**

![[box-model.png]]

---
**Block vs Inline Elements**

Understanding element display behavior

---
# **Block vs Inline Elements**
**Block Elements:**

```html
<div>Block element - takes full width</div>
<p>Another block element - starts on new line</p>
<h1>Headings are also block elements</h1>
```
Common block elements:
```html
<div>
<p>
<h1>-<h6>
<section>
<article>
<header>
<footer>
```
---
# **Block vs Inline Elements**
## Block Elements
- Take full available width <!-- element class="fragment" -->
- Start on a new line <!-- element class="fragment" -->
- Width and height can be set <!-- element class="fragment" -->

---
# **Block vs Inline Elements**

## Inline Elements:
Elements that flow with text

---
# **Block vs Inline Elements**

## Inline Elements:
```html
<p>
	This paragraph contains 
	<span>inline elements</span> 
	like 
	<a href="#">links</a> 
	and 
	<strong>bold text</strong> 
	that flow 
	<em>naturally</em> 
	with the text.
</p>
```
---
# **Block vs Inline Elements**

## Inline Elements
Common Inline elements:
```html
<span>
<a>
<strong>
<em>
<img>
<input>
```
---
# **Block vs Inline Elements**

## Inline Elements:
- Flow within text lines <!-- element class="fragment" -->
- Width and height ignored <!-- element class="fragment" -->
- Only horizontal margins are effective <!-- element class="fragment" -->
---
# **Block vs Inline Elements**

## Inline-Block Elements

Best of both worlds

---
# **Block vs Inline Elements**

## Inline-Block Elements:
```css
.inline-block-example {
  display: inline-block;
  width: 150px;             /* Width works! */
  height: 80px;             /* Height works! */
  margin: 10px;             /* All margins work! */
  padding: 15px;            /* All padding works! */
  vertical-align: top;      /* Can align vertically */
}
```
---

# **Block vs Inline Elements**

## Inline-Block Elements:
```html
<div class="inline-block-example">Box 1</div>
<div class="inline-block-example">Box 2</div>
<div class="inline-block-example">Box 3</div>
<!-- These will sit side by side, but can have dimensions -->
```
---
# **Block vs Inline Elements**

## Inline-Block Elements:

- Flow Horizontally like Inline Elements <!-- element class="fragment" -->
- Accept width/height like block elements <!-- element class="fragment" -->
- Useful for navigation menus and button groups <!-- element class="fragment" -->