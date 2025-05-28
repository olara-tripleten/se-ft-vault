---
# CSS 101
#CSS
---

**CSS: Cascading Style Sheets**

_Adding Style to Structure_

---

**Quick HTML Review**

Before diving into CSS, let's cover some essential HTML attributes we'll need:

- **id** attribute - Unique identifier
- **class** attribute - Grouping elements
- **Common HTML elements** we'll be styling

<!-- element class="fragment" -->

---

**HTML Attributes: id**

The `id` attribute creates a **unique identifier** for an element:

```html
<h1 id="main-title">Welcome to My Site</h1>
<div id="navigation">Menu content</div>
<p id="intro-paragraph">Introduction text</p>
```

<!-- element class="fragment" -->

**Rules:**

<!-- element class="fragment" -->

- Each `id` must be unique on the page
- Used for specific targeting in CSS and JavaScript

<!-- element class="fragment" -->

---

**HTML Attributes: class**

The `class` attribute groups elements for styling:

```html
<p class="highlight">Important paragraph</p>
<p class="highlight">Another important paragraph</p>
<div class="card">Content in a card</div>
<div class="card featured">Featured card</div>
```

<!-- element class="fragment" -->

**Rules:**

<!-- element class="fragment" -->

- Multiple elements can share the same class
- Elements can have multiple classes (space-separated)

<!-- element class="fragment" -->

---

**What is CSS?**

**CSS (Cascading Style Sheets)** controls the visual presentation of HTML elements

<!-- element class="fragment" -->

CSS defines:

<!-- element class="fragment" -->

- Colors and fonts
- Layout and spacing
- Animations and effects
- Responsive design

<!-- element class="fragment" -->

---

**CSS Syntax**

CSS uses **selectors** and **declarations**:

```css
selector {
  property: value;
  another-property: another-value;
}
```

<!-- element class="fragment" -->

**Example:**

<!-- element class="fragment" -->

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

<!-- element class="fragment" -->

---

**CSS Selectors And specificity**

**Element Selector:**

```css
/* Lowest specificity */
p {
  color: black;
}
```

<!-- element class="fragment" -->

**Class Selector:**

<!-- element class="fragment" -->

```css
/* Medium specificity */
.highlight {
  background-color: yellow;
}
```

<!-- element class="fragment" -->

**ID Selector:**

<!-- element class="fragment" -->

```css
/* Highest specificity */
#main-title {
  font-size: 32px;
}
```

<!-- element class="fragment" -->

---

**How to Add CSS to HTML**

Three methods:

1. **External Stylesheet** (Recommended)

<!-- element class="fragment" -->

2. **Internal Styles** (Optional)

<!-- element class="fragment" -->

3. **Inline Styles** (Optional)

<!-- element class="fragment" -->

---

**Method 1: External Stylesheet**  
_The Professional Way_

**Create a separate CSS file:**

<!-- element class="fragment" -->

```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
}
```

<!-- element class="fragment" -->

**Link it in your HTML:**

<!-- element class="fragment" -->

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

<!-- element class="fragment" -->

---

**Why External Stylesheets?**

**Benefits:**

- Separation of concerns <!-- element class="fragment" -->
- Reusable across multiple pages <!-- element class="fragment" -->
- Easier maintenance <!-- element class="fragment" -->
- Better organization <!-- element class="fragment" -->
- Faster loading (caching) <!-- element class="fragment" -->

<!-- element class="fragment" -->

**Best Practice:** Always use external stylesheets for projects

<!-- element class="fragment" -->

---

**Method 2: Internal Styles**  
_Optional - For Small Projects_

```html
<head>
  <style>
    body {
      background-color: #f0f0f0;
    }
    h1 {
      color: red;
    }
  </style>
</head>
```

<!-- element class="fragment" -->

**Use Case:** Quick Prototypes / examples

<!-- element class="fragment" -->

---

**Method 3: Inline Styles**  
_Optional - Deprecated/Not Recommended_

<!-- element class="fragment" -->

```html
<h1 style="color: green; font-size: 28px;">Styled Heading</h1>
<p style="background-color: yellow;">Highlighted paragraph</p>
```

<!-- element class="fragment" -->

**When to Use:** when it's the only option

<!-- element class="fragment" -->

---

**CSS Properties: Typography**

<!-- element class="fragment" -->

```css
.text-styling {
  font-family: "Arial", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  line-height: 1.5;
  text-align: center;
}
```

<!-- element class="fragment" -->

---

**CSS Properties: Colors**

**Different Color Formats:**

```css
.color-examples {
  color: red; /* Named colors */
  color: #ff0000; /* Hex codes */
  color: rgb(255, 0, 0); /* RGB values */
  color: rgba(255, 0, 0, 0.5); /* RGB with transparency */
}
```

<!-- element class="fragment" -->

---

**CSS Properties: Spacing**

**Margin (Outside spacing):** <!-- element class="fragment" -->

```css
.spacing {
  margin: 20px; /* All sides */
  margin-top: 10px; /* Specific side */
  margin: 10px 20px; /* Vertical, Horizontal */
}
```

<!-- element class="fragment" -->

**Padding (Inside spacing):** <!-- element class="fragment" -->

```css
.spacing {
  padding: 15px;
  padding-left: 25px;
}
```

<!-- element class="fragment" -->

---

**CSS Properties: Background**

```css
.background-styling {
  background-color: #f8f9fa;
  background-image: url("pattern.png");
  background-size: cover;
  background-repeat: no-repeat;
}
```

<!-- element class="fragment" -->

---

**CSS Properties: Borders**

```css
.border-styling {
  border: 2px solid #333; /* Width, style, color */
  border-radius: 10px; /* Rounded corners */
  border-top: 1px dashed red; /* Specific side */
}
```

<!-- element class="fragment" -->

---

**Basic Layout with CSS**

**Display Property:**

```css
.layout {
  display: block; /* Full width */
  display: inline; /* Inline with text */
  display: inline-block; /* Inline but with width/height */
  display: none; /* Hidden */
}
```

<!-- element class="fragment" -->

---

**Width and Height**

```css
.sizing {
  width: 300px; /* Fixed width */
  width: 50%; /* Percentage */
  max-width: 800px; /* Maximum width */
  height: 200px;
  min-height: 100px;
}
```

<!-- element class="fragment" -->

---

**CSS Cascade and Specificity**
**Specificity Order (highest to lowest):**

1. Inline styles
2. IDs
3. Classes
4. Elements

**Example:**

```css
p {
  color: black;
} /* Specificity: 1 */
.highlight {
  color: blue;
} /* Specificity: 10 */
#main {
  color: red;
} /* Specificity: 100 */
```

<!-- element class="fragment" -->

---

**Practical Example**

**HTML:**

```html
<div class="card">
  <h2 class="card-title">Welcome</h2>
  <p class="card-content">This is a styled card.</p>
</div>
```

<!-- element class="fragment" -->

**CSS:** <!-- element class="fragment" -->

```css
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
}

.card-title {
  color: #2c3e50;
  margin-bottom: 10px;
}
```

<!-- element class="fragment" -->

---

**CSS Best Practices**

1. **Use external stylesheets**
2. **Organize your CSS** (group related styles)
3. **Use meaningful class names**
4. **Comment your code**
5. **Keep specificity low**
6. **Test across browsers**

---

**Resources**

**Essential References:**

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

**Practice:** Start with simple styling and gradually add complexity
