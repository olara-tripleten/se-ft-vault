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

**Welcome to CSS Mastery** Borders, Box-Sizing, and Responsible AI Learning

Today we'll explore:

- Advanced CSS border techniques <!-- element class="fragment" -->
- Box-sizing fundamentals for predictable layouts <!-- element class="fragment" -->
- Responsible AI integration in your learning journey
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

**The Box Model Challenge** Understanding the default behavior

```css
.default-box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
}
```

**Total width**: 200px + 20px + 20px + 5px + 5px = 250px

<!-- element class="fragment" -->

This unpredictable sizing causes layout headaches!

<!-- element class="fragment" -->

---

**Box-Sizing: Content-Box** The default (and problematic) behavior

```css
.content-box {
  box-sizing: content-box; /* default */
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
}
```

- Width applies only to content area <!-- element class="fragment" -->
- Padding and borders add to total size <!-- element class="fragment" -->
- Makes responsive design challenging <!-- element class="fragment" -->

---

**Box-Sizing: Border-Box** The solution for predictable layouts

```css
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
}
```

- Width includes content, padding, AND borders <!-- element class="fragment" -->
- Total width remains exactly 200px <!-- element class="fragment" -->
- Content area shrinks to accommodate padding/borders <!-- element class="fragment" -->

---

**Global Box-Sizing Reset** The modern standard approach

```css
/* Universal selector approach */
* {
  box-sizing: border-box;
}
```

Set once, benefit everywhere in your stylesheet

<!-- element class="fragment" -->

---

**Visual Debugging Borders** Developer tools for layout understanding

```css
/* Temporary debugging borders */
* {
  border: 1px solid red;
}

/* More subtle approach */
.debug {
  outline: 1px solid rgba(255, 0, 0, 0.5);
}
```

Quickly visualize element boundaries during development

<!-- element class="fragment" -->
