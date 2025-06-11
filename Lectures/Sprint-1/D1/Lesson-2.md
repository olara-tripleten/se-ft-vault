<style>
	* {
		width: 100%;
		text-align: start;
	}
	.controls{
		width: auto;
		text-align: end;
	}
	code {
		text-align: start;
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

## BEM Methodology

**_B_**lock - **_E_**lement - **_M_**odifier

---

# BEM Methodology

It helps by:

- Reusable Components
- Maintainable code structure
- Clear relationship between CSS classes

---

# BEM Methodology

The BEM structure

- **Block**: Stand alone component
- Element: Part of a block
- Modifier: Variation of block/element

---

# BEM Methodology

BEM Syntax example:

```css
.block {
}

.block__element {
}

.block__element_modifier {
}
```

---

**General Naming Rules:**

- Use lowercase letters
- Separate words with hyphens: `navigation-bar`
- Should be meaningful and descriptive

---

# BEM Methodology

**BEM Block Structure**

**Block** represents a standalone component:

```css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}
```

```html
<div class="card">
  <!-- Card content -->
</div>
```

<!-- element class="fragment" -->

---

# BEM Methodology

**BEM Element Structure**

**Element** is a part of a block: `block__element`

<!-- element class="fragment" -->

```css
.card__header {
  font-size: 1.5rem;
  font-weight: bold;
}
.card__content {
  margin: 1rem 0;
  line-height: 1.6;
}
.card__footer {
  text-align: right;
  color: #666;
}
```

---

```html
<div class="card">
  <div class="card__header">Card Title</div>
  <div class="card__content">Card description text</div>
  <div class="card__footer">Footer info</div>
</div>
```

---

# BEM Methodology

**BEM Modifier Structure**

Variations and states

**Modifier** changes appearance or behavior: `block_modifier` or `block__element_modifier`

<!-- element class="fragment" -->

```css
.card_featured {
  border-color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}
.card_large {
  padding: 2rem;
  font-size: 1.1rem;
}
.card__header_centered {
  text-align: center;
}
```

<!-- element class="fragment" -->

---

# BEM Methodology

**BEM Modifier Structure**

Variations and states
If a modifier has several variations we should use:

```css
.button {
  /* Base class */
}

.button_type_primary {
}

.button_type_danger {
}

.button_type_large {
}
```

---

Identify BEM Elements / **Menu**

## ![[Screenshot 2025-05-29 at 4.47.41 PM.png]]

Starting code

```html
<header>
  <nav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
</header>
```

```html
<main>
  <h1>Welcome to the Home Page</h1>
  <p>This is a practice page for BEM modifiers.</p>
</main>
```

## note: Jump to vscode and solve the practice

# BEM

## Common BEM Errors

- An element can never be placed outside the corresponding block.
- A modifier can't be used on an HTML element without also including the thing it modifies.
- A modifier should only store the styles that are actually being _modified_.

note: Given that the lecture is rather short, I created a small project where the idea is to refactor an [HTML file to use semantic selectors and BEM](./practice/bem-refactor/index.html)
