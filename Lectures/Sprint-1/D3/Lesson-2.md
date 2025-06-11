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

**Understanding File Paths** _Essential concepts for web development_

File paths tell your browser where to find resources like images, CSS files, and other HTML pages.

**Two main types:**

- Absolute paths <!-- element class="fragment" -->
- Relative paths <!-- element class="fragment" -->

---

**What is a File Path?** _The roadmap to your files_

A file path is like giving directions to find a specific file on your computer or website.

<!-- element class="fragment" -->

```
project/
├── index.html
├── about.html
├── css/
│   └── style.css
└── images/
    ├── logo.png
    └── hero.jpg
```

<!-- element class="fragment" -->

Think of it as your project's address system!

<!-- element class="fragment" -->

---

**Absolute Paths** _The complete address_

An absolute path gives the **complete location** from the root of your website.

<!-- element class="fragment" -->

```html
<!-- Absolute path examples -->
<img src="/images/logo.png" alt="Logo" />
<link rel="stylesheet" href="/css/style.css" />
<a href="/about.html">About Us</a>
```

<!-- element class="fragment" -->

**Key characteristic:** Always starts with `/` (forward slash)

<!-- element class="fragment" -->

---

**Relative Paths** _Directions from where you are_

A relative path gives directions **from the current file's location**.

<!-- element class="fragment" -->

```html
<!-- From index.html in root folder -->
<img src="./images/logo.png" alt="Logo" />
<link rel="stylesheet" href="./css/style.css" />
<a href="about.html">About Us</a>
```

<!-- element class="fragment" -->

**Key characteristic:** starts with `./` or `../`

<!-- element class="fragment" -->

---

**Relative Path Navigation** _Moving up and down the folder tree_

**Same folder:** Just use `./filename`

```html
<a href="./about.html">About</a>
```

<!-- element class="fragment" -->

**Go into a subfolder:** Use `./folder/file`

<!-- element class="fragment" -->

```html
<img src="./images/hero.jpg" alt="Hero" />
```

<!-- element class="fragment" -->

**Go up one level:** Use `../`

<!-- element class="fragment" -->

```html
<!-- From css/style.css, link to images -->
background-image: url('../images/hero.jpg');
```

<!-- element class="fragment" -->

---

**The `../` Navigation** _Going up the folder hierarchy_

```
project/
├── index.html
├── pages/
│   └── about.html        ← You are here
├── css/
│   └── style.css
└── images/
    └── logo.png          ← You want to reach this
```

<!-- element class="fragment" -->

```html
<!-- From pages/about.html -->
<img src="../images/logo.png" alt="Logo" />
```

<!-- element class="fragment" -->

`../` means "go up one folder level"

<!-- element class="fragment" -->

---

**Common File Path Mistakes** _What trips up beginners_

**❌ Wrong:** Missing the `../` when going up

```html
<!-- From pages/about.html -->
<img src="./images/logo.png" alt="Logo" />
```

<!-- element class="fragment" -->

**✅ Correct:** Using `../` to go up first

```html
<!-- From pages/about.html -->
<img src="../images/logo.png" alt="Logo" />
```

<!-- element class="fragment" -->

**Remember:** The browser looks relative to where the current file is located!

<!-- element class="fragment" -->

---

**VSCode Autocomplete Magic** _Let VSCode build paths for you_

>

**Step 1:** Start typing your HTML tag

```html
<img src="
```

<!-- element class="fragment" -->

**Step 2:** VSCode shows available folders and files

<!-- element class="fragment" -->

**Step 3:** Use arrow keys and Enter to select

<!-- element class="fragment" -->

**Pro tip:** VSCode automatically adds `../` when needed!

<!-- element class="fragment" -->

note: Demonstrate

---

**VSCode Path Autocomplete Demo** _The smart way to build file paths_

```html
<img src="| <!-- Cursor here, start typing -->
```

**What you'll see:**

<!-- element class="fragment" -->

- Folder suggestions appear
- Use Tab or Enter to accept
- VSCode builds the correct path automatically

<!-- element class="fragment" -->

**Result:**

<!-- element class="fragment" -->

```html
<img src="./images/logo.png" alt="Logo" />
```

<!-- element class="fragment" -->

---

**When to Use Absolute vs Relative** _Choosing the right approach_

<!-- element class="fragment" -->

**Use Relative Paths when:**

- Linking to files within your project
- Working on local development

<!-- element class="fragment" -->

**Use Absolute Paths when:**

- Linking to external resources
- Referencing files from the root level

---

**Quick Reference: Path Patterns** _Common scenarios you'll encounter_

<!-- element class="fragment" -->

```html
<!-- Same folder -->
<a href="./about.html">About</a>

<!-- Go into subfolder -->
<img src="./images/photo.jpg" alt="Photo" />

<!-- Go up one level -->
<link href="../css/style.css" rel="stylesheet" />

<!-- Go up two levels -->
<img src="../../images/logo.png" alt="Logo" />
```

---

**Troubleshooting Broken Links** _When paths don't work_

**Check these common issues:**

<!-- element class="fragment" -->

1. **File location:** Is the file actually where you think it is?

<!-- element class="fragment" -->

2. **Spelling:** Case-sensitive! `Image.jpg` ≠ `image.jpg`

<!-- element class="fragment" -->

3. **Folder levels:** Count how many `../` you need

<!-- element class="fragment" -->

4. **File extensions:** Don't forget `.html`, `.css`, `.jpg`, etc.

<!-- element class="fragment" -->

---

**VSCode Tips for File Paths** _Maximize your efficiency_

**Tip 1:** Use Ctrl+Space to trigger autocomplete manually

<!-- element class="fragment" -->

**Tip 2:** Right-click files in Explorer → "Copy Relative Path"

<!-- element class="fragment" -->

**Tip 3:** Use the built-in Live Server extension to test links

<!-- element class="fragment" -->

**Tip 4:** Check the Problems panel for broken link warnings

<!-- element class="fragment" -->

---

**Key Takeaways** _Remember these essentials_

- **Relative paths** are usually what you want for local files

<!-- element class="fragment" -->

- **Use `../` to go up** folder levels

<!-- element class="fragment" -->

- **VSCode autocomplete** is your best friend for building paths

<!-- element class="fragment" -->

- **Test your links** in the browser to catch mistakes early

<!-- element class="fragment" -->
