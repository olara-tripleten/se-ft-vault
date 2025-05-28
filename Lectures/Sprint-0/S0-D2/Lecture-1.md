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

Dev tools & Practical Example
