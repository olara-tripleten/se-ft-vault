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

## Coffeeshop Stage 2

- Project Overview <!-- element class="fragment" -->
- Folder Organization <!-- element class="fragment" -->
- Work on the project <!-- element class="fragment" -->

---

## Stage 2: Book a table Form

## ![[Screenshot 2025-05-30 at 4.27.03 PM.png]]

Workflow is the same as stage 1

- Work on your project on vscode
- After finishing the changes run:

```sh
# To Stage the changes
git add -A

# To commit the staged changes
git commit -m "Add coffeeshop reservation section"

# Push the changes
git push
```

---

**BEM Folder Structure** Organizing CSS with Block, Element, Modifier Methodology

A shallow, practical approach to structuring your stylesheets

---

**What is BEM Folder Structure?** Organizing CSS Files by Component Logic

**BEM stands for:**

- **Block** - Independent component (header, menu, card)
- **Element** - Parts of a block (header**logo, menu**item)
- **Modifier** - Variations of blocks/elements (button_primary, card_large)

<!-- element class="fragment" -->

**Our Approach:** <!-- element class="fragment" -->

- Shallow architecture (no deep nesting)
- One file per block
- Elements and modifiers in the same block file

<!-- element class="fragment" -->

---

**Folder Structure Overview** Simple and Scalable Organization

```
some_project/
├── blocks/
│   ├── header.css
│   ├── footer.css
│   ├── logo.css
│   └── menu.css
├── pages/
│   └── index.css
└── index.html
```

<!-- element class="fragment" -->

**Two Main Directories:** <!-- element class="fragment" -->

- `blocks/` - Individual component stylesheets
- `pages/` - Page-specific styles and imports

<!-- element class="fragment" -->

---

**Blocks Directory** One Component, One File

Each block gets its own CSS file containing:

<!-- element class="fragment" -->

```css
/* blocks/header.css */
.header {
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.header__navigation {
  display: flex;
  gap: 1rem;
}

.header_sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
```

<!-- element class="fragment" -->

**Key Benefits:** <!-- element class="fragment" -->

- Easy to locate component styles <!-- element class="fragment" -->
- Clear separation of concerns <!-- element class="fragment" -->
- Reusable across pages <!-- element class="fragment" -->

---

**Pages Directory** Connecting Everything Together

The `pages/index.css` file imports all needed blocks:

```css
/* pages/index.css */
@import "../blocks/header.css";
@import "../blocks/footer.css";
@import "../blocks/logo.css";
@import "../blocks/menu.css";
```

<!-- element class="fragment" -->

**Then link to your HTML:** <!-- element class="fragment" -->

```html
<link rel="stylesheet" href="pages/index.css" />
```

<!-- element class="fragment" -->

---

**Best Practices** Making the Most of BEM Structure

**Naming Conventions:**

- Blocks: `.header`, `.menu`, `.card`
- Elements: `.header__logo`, `.menu__item`
- Modifiers: `.button_primary`, `.card_large`

<!-- element class="fragment" -->

**File Organization Tips:**

- Keep block files focused and small
- Use meaningful, descriptive names
- Import only what you need in page files

<!-- element class="fragment" -->

**Benefits of This Approach:** <!-- element class="fragment" -->

- 🎯 Easy to find and edit component styles <!-- element class="fragment" -->
- 🔄 Reusable blocks across multiple pages <!-- element class="fragment" -->
- 🧹 Clean, maintainable codebase <!-- element class="fragment" -->
- ⚡ Efficient development workflow <!-- element class="fragment" -->
