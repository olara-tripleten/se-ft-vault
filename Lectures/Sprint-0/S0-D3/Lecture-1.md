**More on CSS**

What we'll be building

<!-- element class="fragment" -->

note:

---

## ![[clean-code-rules.png]]

#### Header

![[clean-code-rules-header.png]]

- Font Styles <!-- element class="fragment" -->
- Dimensions <!-- element class="fragment" -->
- Background Styles <!-- element class="fragment" -->

---

HTML Structure

```html {hl_lines=[1, 5]}
<header class="header">
  <h1 class="header-title">clean code rules</h1>
</header>
```

<!-- element class="fragment" -->

---

HTML Structure

```html {hl_lines=[2, 3, 4]}
<header class="header">
  <h1 class="header-title">clean code rules</h1>
</header>
```

---

CSS Background: Image

```css {hl_lines=[2]}
.header {
  background-image: url("./header-background.png");
}
```

---

CSS Background: Size

```css {hl_lines=[3]}
.header {
  background-image: url("./header-background.png");
  background-size: cover; /* contain; w h; */
}
```

---

CSS Background: Position

```css {hl_lines=[4]}
.header {
  background-image: url("./header-background.png");
  background-size: cover;
  background-position: center;
}
```

---

CSS Background: Repeat

```css {hl_lines=[5]}
.header {
  background-image: url("./header-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

---

CSS Dimensions: Height

```css {hl_lines=[6, 7, 8, 9, 10, 11]}
.header {
  background-image: url("./header-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 35vh;
  /*
		Pixels are used when you need precision
		Relative units are used when you want
		adaptability
	*/
}
```

---

CSS Fonts: Size

```css {hl_lines=[2]}
.header-title {
  font-size: 48px;
}
```

For fonts it's common to use the following units `px`, `em`, `rem`

<!-- element class="fragment" -->

---

CSS Fonts: weight

```css {hl_lines=[3]}
.header-title {
  font-size: 48px;
  font-weight: bold;
}
```

You can use

<!-- element class="fragment" -->

- light, medium, bold, bolder, black <!-- element class="fragment" -->
- 50, 100, ..., 1000 <!-- element class="fragment" -->

---

CSS Fonts: Color

```css {hl_lines=[4]}
.header-title {
  font-size: 48px;
  font-weight: bold;
  color: white;
}
```

---

`<main>`

## ![[clean-code-rules-main.png]]

`<main>`

- Background Color <!-- element class="fragment" -->
- Font-Styles <!-- element class="fragment" -->
- Flexbox <!-- element class="fragment" -->
- Image styles <!-- element class="fragment" -->

---

`<main>` HTML Structure

```html {hl_lines=[1, 3]}
<main>
  <!-- ... -->
</main>
```

```html {hl_lines=[1]}
<main class="main">
  <!-- ... -->
</main>
```

<!-- element class="fragment" -->

---

`<main>` card list

```html {hl_lines=[2, 4]}
<main class="main">
  <ul class="cards">
    <!-- Unordered list -->
    <!-- ... -->
  </ul>
</main>
```

<!-- element class="fragment" -->

```html {hl_lines=[3, 5]}
<main class="main">
  <ul class="cards">
    <li class="card">
      <!-- List Item -->
      <!-- ... -->
    </li>
  </ul>
</main>
```

<!-- element class="fragment" -->

---

`.main` styles

```css {hl_lines=[2]}
.main {
  background-color: gray;
}
```

```css {hl_lines=[3, 4]}
.main {
  background-color: gray;
  padding-top: 20px;
  padding-bottom: 20px;
}
```

<!-- element class="fragment" -->
