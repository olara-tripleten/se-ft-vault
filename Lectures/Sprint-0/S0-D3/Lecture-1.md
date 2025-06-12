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

**Welcome to CSS Mastery** Borders, shorthands, devtools recap

Today we'll explore:

- Advanced CSS border techniques <!-- element class="fragment" -->
- Shorthands <!-- element class="fragment" -->
- Re-visit Devtools
<!-- element class="fragment" -->

---

**Understanding CSS Borders** The foundation of visual design

Borders define the edges of elements and create visual hierarchy

```css
.basic-border {
  border: 2px solid #333;
  border-width: 1px;
  border-style: solid;
  border-color: blue;
}
```

Three essential properties: width, style, and color

<!-- element class="fragment" -->

---

**Border Styles Variety** Beyond the basic solid line

```css
.border-styles {
  /* Solid line */
  border: 2px solid #000;

  /* Dashed line */
  border: 2px dashed #ff6b6b;

  /* Dotted pattern */
  border: 3px dotted #4ecdc4;

  /* Double line effect */
  border: 4px double #45b7d1;
}
```

Each style creates different visual impact and user experience

<!-- element class="fragment" -->

---

**Individual Border Control** Precision styling for each side

```css
.custom-borders {
  border-top: 3px solid #e74c3c;
  border-right: 1px dashed #3498db;
  border-bottom: 2px dotted #2ecc71;
  border-left: 4px double #f39c12;
}
```

```css
/* Alternative syntax */
.border-sides {
  border-width: 3px 1px 2px 4px;
  border-style: solid dashed dotted double;
  border-color: red blue green orange;
}
```

<!-- element class="fragment" -->

---

**Border Radius Magic** Creating rounded corners and shapes

```css
.rounded-elements {
  /* Uniform radius */
  border-radius: 10px;

  /* Individual corners */
  border-radius: 10px 20px 15px 5px;

  /* Perfect circle */
  border-radius: 50%;

  /* Elliptical shape */
  border-radius: 50px / 25px;
}
```

Transform rectangles into circles, pills, and custom shapes

<!-- element class="fragment" -->

---

# CSS Shorthands

_Writing Less, Achieving More_

---

## What are CSS Shorthands?

**Shorthand properties** let you set multiple related CSS properties with a single declaration.

**Benefits:**

- Less code to write
- Faster to read
- Easier maintenance
- Cleaner stylesheets
---
**Example:**

```css
/* Instead of this: */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Write this: */
margin: 10px 20px;
```

---

## Essential Shorthands: Spacing

**Margin & Padding Shorthand:**

```css
/* 4 values: top right bottom left (clockwise) */
margin: 10px 15px 20px 5px;

/* 3 values: top horizontal bottom */
margin: 10px 15px 20px;

/* 2 values: vertical horizontal */
margin: 10px 20px;

/* 1 value: all sides */
margin: 15px;

/* Same pattern applies to padding */
padding: 10px 20px;
```

**Memory Tip:** Think of a clock - start at 12 and go clockwise!

---

## Essential Shorthands: Borders & Backgrounds

**Border Shorthand:**

```css
/* width | style | color */
border: 2px solid #333;
border-top: 1px dashed red;

/* Individual borders */
border-left: 3px solid blue;
```
---
**Background Shorthand:**

```css
/* color | image | repeat | position | size */
background: #fff url('bg.jpg') no-repeat center/cover;

/* Common patterns: */
background: #f0f0f0;
background: url('image.png') center/contain;
```
---
**Font Shorthand:**

```css
/* style | weight | size/line-height | family */
font: italic bold 16px/1.5 Arial, sans-serif;

/* Simplified: */
font: 18px Georgia, serif;
```

---

## Quick Reference & Best Practices

**Most Used Shorthands:**

```css
/* Spacing (use constantly) */
margin: 20px auto;     /* Center horizontally */
padding: 10px 15px;    /* Vertical | Horizontal */

/* Borders (very common) */
border: 1px solid #ddd;
border-radius: 8px;    /* Rounded corners */

/* Backgrounds (frequently used) */
background: #fff;
background: url('img.jpg') center/cover;

/* Typography (common) */
font: 16px/1.4 Arial, sans-serif;
```
---
**Pro Tips:**

- Start with the most common 2-value patterns: `margin: 10px 20px`
- Use `margin: 0 auto` to center elements
- Always specify border style: `border: 1px solid #ccc`
- Remember: shorthands reset unspecified values to defaults

**Practice:** Use shorthands for cleaner, more professional CSS!

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
