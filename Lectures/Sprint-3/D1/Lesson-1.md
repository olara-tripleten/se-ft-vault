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

## Grid 101

---

\***\*What is Grid Layout\*\***

A two-dimensional CSS layout system for web design

- Lets you align items in rows and columns  <!-- element class="fragment" -->
- More powerful than flexbox for complex layouts   <!-- element class="fragment" -->
- Enables precise control over layout structure   <!-- element class="fragment" -->

---

\***\*CSS Grid Terminology\*\***

Understand key terms before diving into code

- Grid Container: Element with display: grid  <!-- element class="fragment" -->
- Grid Items: Direct children of the container
<!-- element class="fragment" -->
- Grid Lines: Dividers between rows and columns  <!-- element class="fragment" -->
- Grid Tracks: Space between two lines  <!-- element class="fragment" -->
- Grid Areas: Named section of the grid
<!-- element class="fragment" -->

---

\***\*Creating a Grid Container\*\***

Turn any block into a grid layout

```css
.container {
  display: grid;
}
```

- Always start by applying `display: grid`  <!-- element class="fragment" -->
- Enables grid-specific properties <!-- element class="fragment" -->

---

\***\*Defining Rows and Columns\*\***

Use `grid-template-rows` and `grid-template-columns`

```css

.container {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
  grid-template-rows: auto auto;
}

```

- Values can be px, %, fr, or auto  <!-- element class="fragment" -->
- fr divides space proportionally <!-- element class="fragment" -->

---

\***\*The** `**gap**` **Property\*\***

Adds spacing between rows and columns

```css
.container {
  display: grid;
  gap: 20px;
}
```

- Replaces `grid-row-gap` and `grid-column-gap`  <!-- element class="fragment" -->
- Accepts any CSS length unit  <!-- element class="fragment" -->

---

\***\*The** `**repeat()**` **Function\*\***

Simplify repetitive column or row definitions

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

- First value: number of repetitions  <!-- element class="fragment" -->
- Second value: what to repeat <!-- element class="fragment" -->

---

\***\*Using the** `**fr**` **Unit\*\***

Distribute space proportionally within the grid

```css

.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

```

- 2/3 of the space to first column  <!-- element class="fragment" -->
- 1/3 to the second  <!-- element class="fragment" -->

---

\***\*Positioning Items in the Grid\*\***

Use `grid-column` and `grid-row` to place items

```css
.item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
```

- Numbers refer to grid lines  <!-- element class="fragment" -->
- You can span multiple columns or rows <!-- element class="fragment" -->

---

\***\*Grid Template Areas\*\***

Name grid sections for easier layout management

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

- Define areas visually  <!-- element class="fragment" -->
- Assign items using grid-area <!-- element class="fragment" -->

---

\***\*Responsive Grids with** `**auto-fit**` **and** `**minmax()`\*\*\*\*

Create adaptive layouts without media queries

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

- `auto-fit`: fills the row with as many columns as possible  <!-- element class="fragment" -->
- `minmax()`: sets a minimum and maximum width  <!-- element class="fragment" -->
- Columns shrink and grow responsively <!-- element class="fragment" -->

---

\***\*Example Layout with BEM Naming\*\***

A responsive card layout using CSS Grid and BEM

```html
<section class="grid">
   
  <div class="grid__item grid__item--featured">Featured</div>
   
  <div class="grid__item">Card 1</div>
   
  <div class="grid__item">Card 2</div>
   
  <div class="grid__item">Card 3</div>
</section>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
.grid__item {
  background-color: #eee;
  padding: 1rem;
  border-radius: 8px;
}
.grid__item--featured {
  grid-column: span 2;
}
```

- Clean BEM naming  <!-- element class="fragment" -->
- Responsive behavior using minmax and auto-fit <!-- element class="fragment" -->
