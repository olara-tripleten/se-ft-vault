
#### Software Engineering

Building applications with HTML, CSS, and JavaScript

---

### Web Application Architecture

Three fundamental layers:

- **The Client** <!-- element class="fragment" -->
    - The part the end user interacts with <!-- element class="fragment" -->
- **The Server** <!-- element class="fragment" -->
    - Where the client searches for information<!-- element class="fragment" -->
- **The Database** <!-- element class="fragment" -->
    - Where all the data is stored<!-- element class="fragment" -->

<!-- element class="fragment" -->

_Note: This is an oversimplification, but helpful for understanding_

---

### Starting with Frontend

We begin on the **Client Side** (frontend) using **HTML** and **CSS**

---

# HTML 101

_HyperText Markup Language_

<!-- element class="fragment" -->

The technology that defines the **content and structure** of any website

<!-- element class="fragment" -->

When written properly, it displays information hierarchy in a meaningful way for screen readers

<!-- element class="fragment" -->

---

## HTML Tags

Tags are how we define, display, and structure website content

 <!-- element class="fragment" -->
**Open / Closing Tags:**
 <!-- element class="fragment" -->

```html
<html></html>
```

<!-- element class="fragment" -->

**Self-Closing Tags:**
 <!-- element class="fragment" -->

```html
<html />
```
 <!-- element class="fragment" -->
 
---

### Critical Rule: Tags Must Close



**❌ Incorrect:**
<!-- element class="fragment" -->
```html
<tag>
<another-tag><another-tag>
```
<!-- element class="fragment" -->


**✅ Correct:**
<!-- element class="fragment" -->

```html
<img />
<another-tag></another-tag>
```

<!-- element class="fragment" -->

_This is one of the most common HTML errors!_

<!-- element class="fragment" -->

---

## Types of Tags

Two main categories:

- **Structural Tags** <!-- element class="fragment" -->
- **Content Tags** <!-- element class="fragment" -->

---

## Structural Tags

_Used to group elements_



**Basic Page Structure:**


<!-- element class="fragment" -->

```html
<header></header>
<main></main>
<footer></footer>
```

<!-- element class="fragment" -->

**Other Structural Tags:**

<!-- element class="fragment" -->

```html
<div>     <!-- Generic Block -->
<article>
<section>
<nav>
<table>
```
<!-- element class="fragment" -->

---

## Content Tags

_Used to display data_, like paragraphs, images, videos, 

---

**Titles:**

```html
<h1>Website General Title</h1>
<h2>Section title</h2>
<h3>Article Title</h3>
<h4>Subtitle 1</h4>
<h5>Subtitle 2</h5>
<h6>Subtitle 3</h6>
```
<!-- element class="fragment" -->

---

Text Content Tags

```html
<p>Paragraph</p>
<b>Bold text</b>          
<i>Italic Text</i>        
<span>Generic Text</span> 
```
<!-- element class="fragment" -->

---
Media Content
```html
<!-- This is the one we'll use the most -->
<img> 

<!-- Less used -->
<video>
<audio>
```
<!-- element class="fragment" -->

---

## HTML Hierarchy


An html file has a sort of hierarchy defined by levels of "nesting"

Best practice: Use **indentation** to show this hierarchy clearly
<!-- element class="fragment" -->



---

**❌ Poorly Formatted:**

```html
<main>
<section>
	<div>
	<p>
	</p>
</div>
<article>
<h2></h2>
	<div>
	<p>
	</p>
	</div>
	</article>
</section>
</main>
```
<!-- element class="fragment" -->

---

**✅ Properly Formatted:**

```html
<main>
	<section>
		<div>
			<p></p>
		</div>
		<article>
			<h2></h2>
			<div>
				<p></p>
			</div>
		</article>
	</section>
</main>
```
<!-- element class="fragment" -->

---

## HTML Attributes

Additional values that configure elements or adjust their behavior

Format: `key="value"`

<!-- element class="fragment" -->

**Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes

<!-- element class="fragment" -->

---

Most commonly used **Attributes**

```html
<!-- Class applies a group of css styles -->
<p class="user-description">

<!-- id allows you to use a group of css styles -->
<!-- But it's most commonly used to enable Javascript -->
<h2 id="user-name">Username</h2>

<!-- 
	src is the "Path" to the image you want to display 
-->
<img src="user-avatar.jpg">
```
<!-- element class="fragment" -->

---
A html element can have as many attributes as it needs
```html
<img 
	src="user-avatar.jpg"
	class="profile-avatar"
	id="avatar"
>
```
<!-- element class="fragment" -->

---
## Next Steps



- Practice HTML structure and tags
- Learn CSS for styling
- Combine HTML + CSS for complete frontend development

