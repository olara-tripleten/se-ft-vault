# CSS Basic

---

## CSS Fundamentals

Key concepts for styling web pages

- Understanding CSS dimensions and measurement units <!-- element class="fragment" -->
- Working with backgrounds (colors, images, properties) <!-- element class="fragment" -->
- Typography and font styling <!-- element class="fragment" -->
- CSS inheritance principles <!-- element class="fragment" -->

---

**CSS Dimensions**

Understanding how elements are sized

---

CSS provides multiple ways to define element dimensions:

Fixed Sizes <!-- element class="fragment" -->

```css
element {
  width: 300px;
  height: 200px;
}
```

<!-- element class="fragment" -->

Relative Sizes <!-- element class="fragment" -->

```css
element {
  width: 50%;
  height: 100vh;
}
```

<!-- element class="fragment" -->

---

- Fixed dimensions: Provide exact control over design, no flexibility
- Relative dimensions: Provide more loose control over design, higher flexibility <!-- element class="fragment" -->

---

**CSS Measurement Units**

Different units for different purposes <!-- element class="fragment" -->

---

**Absolute Units:**

```css {hl_lines=[2,3,4]}
element {
  width: 200px; /* Pixels - screen pixels */
  margin: 1cm; /* Centimeters */
  padding: 12pt; /* Points */
}
```

- Use **px** for precise control <!-- element class=""="fragment" -->

---

**Relative Units:**

```css {hl_lines=[2,3,4, 5]}
element {
  font-size: 1.2em; /* Relative to parent font size */
  width: 50%; /* Percentage of parent */
  height: 100vh; /* Viewport height */
  padding: 2rem; /* Root em - relative to root font */
}
```

- Use % and rem for responsive design <!-- element class="fragment" -->

---

**Background Styles**

---

**Background color**

```css
element {
  /* Hex color */
  background-color: #3498db;

  /* RGB values */
  background-color: rgb(52, 152, 219);

  /* RGB with transparency */
  background-color: rgba(52, 152, 219, 0.8);

  /* Named colors */
  background-color: lightblue;
}
```

---

Background Images

```css
element {
  /* External image */
  background-image: url("https://picsum.photos/200/201");

  /* Local Image */
  background-image: url("/path/to/image.png");
}
```

---

Background Images Properties

```css
element {
  background-image: url("https://example.com/hero.jpg");
  background-size: cover; /* Covers entire element */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents tiling */
  background-attachment: fixed; /* Fixed during scroll */
}
```

---

Background Image size

```css
element {
  /* Covers all the space */
  background-size: cover;

  /* Is contained within the space */
  background-size: contain;

  /* Width & Height */
  background-size: 200px;

  /* Width x Height */
  background-size: 20px 20px;
}
```

---

**Typography | Fonts**

Styling text effectively

---

**Font Properties**

```css
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

---

**Font Family**

```css {hl_lines=[2]}
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

- Always give at least two fallback font families <!-- element class="fragment" -->

---

Font Size

```css {hl_lines=[3]}
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

---

Font Line-Height

```css {hl_lines=[4]}
h3 {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

Set Line height for better readability

## <!-- element class="fragment" -->

**CSS Inheritance**

How styles cascade down

---

Inherited Properties:

```css
body {
  /* Inherits to all children */
  font-family: "Arial", sans-serif;

  /* Inherits to all children */
  color: #333;

  /* Inherits to all children */
  line-height: 1.6;
}
```

- Text properties typically inherit (font, color, line-height)
<!-- element class="fragment" -->

---

**Non-Inherited Properties**

```css
section {
  margin: 20px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ccc;
}
```

- Box properties don't inherit (margin, padding, background)
<!-- element class="fragment" -->

---

Dev tools

**Introduction to Developer Tools** your gateway to understanding and debugging web development


---

What are Developer Tools? **Built-in browser features for web developers** <!-- element class="fragment" -->

<!-- element class="fragment" -->

They allow you to: <!-- element class="fragment" -->

- Inspect HTML structure <!-- element class="fragment" -->
- Modify CSS styles in real-time <!-- element class="fragment" -->
- Debug JavaScript code <!-- element class="fragment" -->
- Monitor network activity <!-- element class="fragment" -->
- Analyze performance <!-- element class="fragment" -->

---

**Why Use Developer Tools?** 

Essential for learning and professional development
<!-- element class="fragment" -->

---
**For Learning:**

- Understand how websites are built
- Experiment with code safely
- See immediate results of changes

<!-- element class="fragment" -->

---
**For Development:**

- Debug layout issues
- Test responsive designs
- Optimize performance
- Fix broken styles

<!-- element class="fragment" -->

---
**For Inspiration:**

- Learn from other websites
- Reverse-engineer designs
- Understand best practices

<!-- element class="fragment" -->

---

**How to Open Developer Tools**

---

**Method 1: Right-click menu**
- Right-click on any webpage element
- Select "Inspect" or "Inspect Element"

<!-- element class="fragment" -->

---
**Method 2: Keyboard shortcuts**

- **Chrome/Edge:** `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- **Firefox:** `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- **Safari:** `Cmd+Option+I` (Mac) - requires enabling Developer menu first

<!-- element class="fragment" -->

---
**Method 3: Browser menu**

- Chrome: Menu → More Tools → Developer Tools
- Firefox: Menu → Web Developer → Inspector

---

**Developer Tools Interface**

Understanding the main panels
<!-- element class="fragment" -->

---
**Elements/Inspector Panel**

- View and edit HTML structure
- Modify CSS styles in real-time

<!-- element class="fragment" -->

---

**The Elements Panel** 

Your HTML and CSS playground
<!-- element class="fragment" -->

**Left Side: DOM Tree**

- Shows the HTML structure of the page
- Elements can be expanded/collapsed
- Hover to highlight elements on the page

<!-- element class="fragment" -->

---
**Right Side: Styles Panel**

- Shows CSS rules applied to selected element
- Rules are ordered by specificity
- Crossed-out rules are overridden

<!-- element class="fragment" -->

---

**Selecting Elements**

**Method 1: Click the inspect tool**

- Click the target/cursor icon in DevTools
- Click on any element in the webpage
- Element will be highlighted in the DOM tree

<!-- element class="fragment" -->

---
**Method 2: Right-click inspect**

- Right-click directly on the element
- Select "Inspect"
- Opens DevTools with element selected

<!-- element class="fragment" -->

---
**Method 3: Navigate the DOM tree**

- Click through the HTML structure
- Use arrow keys to navigate
- Search with `Ctrl+F` in the Elements panel

<!-- element class="fragment" -->

---

**Understanding the DOM Tree** How HTML appears in Developer Tools

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <header>
      <h1>Welcome</h1>
    </header>
    <main>
      <p>This is a paragraph.</p>
    </main>
  </body>
</html>
```

- Each HTML tag appears as a collapsible node <!-- element class="fragment" -->
- Indentation shows nesting relationships <!-- element class="fragment" -->
- Text content appears inside elements <!-- element class="fragment" -->
- Attributes are shown within the opening tags <!-- element class="fragment" -->

---

**Modifying HTML in Real-Time** Edit structure on the fly

**Edit text content:**

- Double-click on text in the DOM tree
- Type new content
- Press Enter to apply changes

<!-- element class="fragment" -->

---
**Edit HTML attributes:**

- Double-click on attribute values
- Modify href, src, class, id, etc.
- Changes apply immediately

<!-- element class="fragment" -->

---
**Add new elements:**

- Right-click on parent element
- Select "Edit as HTML"
- Add your HTML code

<!-- element class="fragment" -->

---

**The Styles Panel** Your CSS control center

**Computed styles:**

- Shows final calculated values
- Includes inherited properties
- Useful for understanding cascading

<!-- element class="fragment" -->

---
**Applied rules:**

- Shows all CSS rules affecting the element
- Ordered by specificity (most specific first)
- Inline styles appear at the top

<!-- element class="fragment" -->

---
**Override indicators:**

- Crossed-out properties are overridden
- Grayed-out properties are inactive
- Click checkboxes to enable/disable rules
<!-- element class="fragment" -->

---

**Modifying CSS Styles** Real-time style editing

**Edit existing properties:**

- Click on any CSS property value
- Type new values
- Press Tab to move to next property
- Press Enter to add new property

<!-- element class="fragment" -->

---
**Add new properties:**

- Click in empty space within a CSS rule
- Type property name and value
- Use auto-complete suggestions

<!-- element class="fragment" -->

---
**Create new CSS rules:**

- Click the "+" icon in Styles panel
- Creates new rule for selected element
- Add properties as needed
<!-- element class="fragment" -->
---
<!-- element class="fragment" -->

**Developer Tools are essential for:**

- Learning how websites work
- Debugging HTML and CSS issues
- Testing responsive designs
- Experimenting with new techniques

<!-- element class="fragment" -->

**Remember:**

- Changes in DevTools are temporary
- Use right-click → Inspect for quick access
- The Styles panel shows rule specificity
- Practice makes perfect!

<!-- element class="fragment" -->

**Happy debugging! 🛠️**