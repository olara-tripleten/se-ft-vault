

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

**HTML Semantics, IDs & CSS Pseudo-Classes** Advanced Web Development Concepts

Building meaningful, accessible, and interactive web pages

---

**What We'll Cover Today**



- HTML Semantic Elements and their importance

<!-- element class="fragment" -->

- IDs: Purpose, syntax, and linking within pages

<!-- element class="fragment" -->

- CSS Pseudo-classes for interactive states

<!-- element class="fragment" -->

- CSS Pseudo-elements for enhanced styling

<!-- element class="fragment" -->

- Best practices and MDN documentation
<!-- element class="fragment" -->

---

**HTML Semantics Recap** Why meaning matters in markup

**Semantic HTML** uses elements that describe the meaning and structure of content, not just its appearance.


```html
<!-- Non-semantic approach -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main-content">...</div>
<div class="sidebar">...</div>
<div class="footer">...</div>
```

```html
<!-- Semantic approach -->
<header>
  <nav>...</nav>
</header>
<main>...</main>
<aside>...</aside>
<footer>...</footer>
```

---

**Key Semantic Elements** Building blocks for meaningful structure



```html
<article>     <!-- Self-contained content -->
<section>     <!-- Thematic grouping -->
<header>      <!-- Introductory content -->
<nav>         <!-- Navigation links -->
<main>        <!-- Primary content -->
<aside>       <!-- Sidebar content -->
<footer>      <!-- Footer information -->
```


```html
<figure>      <!-- Self-contained content with caption -->
<figcaption>  <!-- Caption for figure -->
<time>        <!-- Date/time information -->
<address>     <!-- Contact information -->
```

<!-- element class="fragment" -->

---

**Semantic Elements in Action** Real-world blog post example

```html
<article>
  <header>
    <h1>Understanding Web Accessibility</h1>
    <p>Published on <time datetime="2024-03-15">March 15, 2024</time></p>
    <address>By <a href="mailto:author@example.com">Jane Developer</a></address>
  </header>
  
  <section>
    <h2>Introduction</h2>
    <p>Web accessibility ensures that websites are usable by everyone...</p>
    <figure>
      <img src="accessibility-chart.png" alt="Accessibility statistics">
      <figcaption>Web accessibility impact statistics</figcaption>
    </figure>
  </section>
  
  <footer>
    <p>Tags: <a href="#accessibility">accessibility</a>, <a href="#web-dev">web development</a></p>
  </footer>
</article>
```

---

**HTML IDs: Unique Identifiers** Creating anchors and references

**ID attributes** provide unique identifiers for HTML elements

```html
<h2 id="introduction">Introduction</h2>
<p id="main-paragraph">This is the main content...</p>
<section id="contact-form">
  <form>...</form>
</section>
```


**Rules for IDs:**

- Must be unique on the page <!-- element class="fragment" -->
- Case-sensitive <!-- element class="fragment" -->
- Cannot contain spaces <!-- element class="fragment" -->
- Should start with a letter <!-- element class="fragment" -->

---

**Using IDs for Internal Links** Creating navigation within your page



```html
<!-- Navigation menu -->
<nav>
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#features">Features</a></li>
   
  </ul>
</nav>
```

<!-- element class="fragment" -->

```html
<!-- Target sections -->
<section id="introduction">
  <h2>Introduction</h2>
  <p>Welcome to our product page...</p>
</section>

<section id="features">
  <h2>Features</h2>
  <p>Our product offers...</p>
</section>
```

<!-- element class="fragment" -->

---

**ID Linking Best Practices** Smooth scrolling and accessibility


```css
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Offset for fixed headers */
section[id] {
  scroll-margin-top: 80px;
}
```

<!-- element class="fragment" -->

```html
<!-- Accessible "skip to content" link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content">
  <h1>Page Title</h1>
  <!-- Main content here -->
</main>
```

<!-- element class="fragment" -->

---

**CSS Pseudo-Classes: Interactive States** Styling based on element state

**Pseudo-classes** select elements based on their state or position

<!-- element class="fragment" -->

```css
/* Link states */
a:link    { color: blue; }
a:visited { color: purple; }
a:hover   { color: red; }
a:active  { color: orange; }
```

<!-- element class="fragment" -->

```css
/* Form states */
input:focus { border-color: #007acc; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
```
<!-- element class="fragment" -->

---

**Structural Pseudo-Classes** Selecting based on position

```css
/* First and last children */
li:first-child { font-weight: bold; }
li:last-child  { margin-bottom: 0; }
```

```css
/* Nth-child patterns */
tr:nth-child(even) { background: #f2f2f2; }
tr:nth-child(odd)  { background: white; }

/* Every third item */
.gallery-item:nth-child(3n) { margin-right: 0; }
```

---


**MDN Documentation: Your Best Friend** Learning to look up what you need

**Mozilla Developer Network (MDN)** is the authoritative source for web documentation



**How to search effectively:**

- Use specific element names: "HTML section element" <!-- element class="fragment" -->
- Search for CSS properties: "CSS hover pseudo-class" <!-- element class="fragment" -->
- Look for examples and browser compatibility <!-- element class="fragment" -->

**Key MDN sections:**
<!-- element class="fragment" -->
- HTML elements reference <!-- element class="fragment" -->
- CSS pseudo-classes reference <!-- element class="fragment" -->
- CSS pseudo-elements reference <!-- element class="fragment" -->
- Web accessibility guidelines <!-- element class="fragment" -->

---

**Using MDN Effectively** Navigation and key information


**What to look for on MDN pages:**

- **Syntax** - How to write it correctly
- **Examples** - Copy-paste starting points
- **Browser support** - Compatibility information
- **Accessibility** - Screen reader and keyboard support

**Pro tip:** Use MDN's search with quotation marks for exact matches

- `"nth-child"` instead of `nth child`
- `"semantic HTML"` instead of `semantic HTML`

---

**Common Gotchas and Solutions** Avoiding frequent mistakes

<!-- element class="fragment" -->

**ID Mistakes:**

```html
<!-- ❌ Wrong: Duplicate IDs -->
<div id="content">...</div>
<div id="content">...</div>

<!-- ✅ Correct: Unique IDs -->
<div id="main-content">...</div>
<div id="sidebar-content">...</div>
```

<!-- element class="fragment" -->

**Pseudo-class Mistakes:**

```css
/* ❌ Wrong: Missing colon */
a hover { color: red; }

/* ✅ Correct: Proper syntax */
a:hover { color: red; }
```

---
