# HTML & CSS Fundamentals

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

_Building Web Pages from Structure to Style_

---

## HTML 101: The Foundation

**HyperText Markup Language** defines the **content and structure** of websites.

**Two Types of Tags:**

- **Open/Closing:** `<html></html>`
- **Self-Closing:** `<img />`

**Critical Rule:** Tags must close in correct order (last opened, first closed)

```html
<!-- ✅ Correct -->
<div>
  <p>
    <span>Text</span>
  </p>
</div>
```

---

## HTML Tag Categories

**Structural Tags** (group elements):

```html
<header></header>
<main>
  <section>
    <article></article>
  </section>
</main>
<footer></footer>
```

**Content Tags** (display data):

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<p>Paragraph text</p>
<img src="image.jpg" />
```

---

## HTML Attributes

Format: `key="value"`

**Essential Attributes:**

```html
<!-- Class: Groups elements for styling -->
<p class="highlight">Important text</p>

<!-- ID: Unique identifier -->
<h2 id="main-title">Unique heading</h2>

<!-- Src: Image path -->
<img src="photo.jpg" class="profile" id="avatar" />
```

**Rules:**

- IDs must be unique per page
- Classes can be shared across elements
- Elements can have multiple attributes

---

## CSS: Adding Style to Structure

**CSS (Cascading Style Sheets)** controls visual presentation.

**Syntax:**

```css
selector {
  property: value;
  another-property: value;
}
```

**Example:**

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

---

## CSS Selectors & Specificity

**From Lowest to Highest Specificity:**

```css
/* Element Selector - Specificity: 1 */
p { color: black; }

/* Class Selector - Specificity: 10 */
.highlight { background-color: yellow; }

/* ID Selector - Specificity: 100 */
#main-title { font-size: 32px; }
```

Higher specificity wins when styles conflict.

---

## Adding CSS to HTML

**1. External Stylesheet (Recommended):**

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

**2. Internal Styles (Quick prototypes):**

```html
<head>
  <style>
    body { background-color: #f0f0f0; }
  </style>
</head>
```

**3. Inline Styles (Last resort):**

```html
<h1 style="color: green;">Styled Heading</h1>
```

---

## Essential CSS Properties

**Typography:**

```css
.text {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
}
```

**Colors:**

```css
.colors {
  color: red;           /* Named */
  color: #ff0000;       /* Hex */
  color: rgb(255,0,0);  /* RGB */
  color: rgba(255,0,0,0.5); /* Transparent */
}
```

---

## Spacing & Layout

**Spacing:**

```css
.spacing {
  margin: 20px;      /* Outside spacing */
  padding: 15px;     /* Inside spacing */
  margin-top: 10px;  /* Specific sides */
}
```

**Layout:**

```css
.layout {
  display: block;        /* Full width */
  display: inline-block; /* Inline with dimensions */
  width: 50%;           /* Responsive width */
  max-width: 800px;     /* Maximum constraint */
}
```

---

## Borders & Backgrounds

**Borders:**

```css
.styled {
  border: 2px solid #333;
  border-radius: 10px;  /* Rounded corners */
}
```

**Backgrounds:**

```css
.background {
  background-color: #f8f9fa;
  background-image: url("pattern.png");
  background-size: cover;
}
```

---

## Practical Example

note: Open Vscode on the index.html and styles.css

---

## Best Practices

**HTML:**

- Use proper indentation for hierarchy
- Close tags in correct order
- Use semantic elements (`<header>`, `<main>`, `<article>`)

**CSS:**

- Use external stylesheets
- Organize related styles together
- Use meaningful class names
- Keep specificity low
- Comment complex code

---

## Key Takeaways

1. **HTML** provides structure and content
2. **CSS** provides visual styling
3. **Separation of concerns** - keep structure and style separate
4. **Specificity matters** - IDs > Classes > Elements
5. **External stylesheets** are the professional standard
6. **Practice makes perfect** - start simple, add complexity gradually

**Essential Resources:**

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) for browser compatibility