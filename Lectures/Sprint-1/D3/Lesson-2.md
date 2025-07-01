
<style>
/* Custom Reveal.js Theme - Educational/Course Style */

/* Import a clean sans-serif font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Root variables for consistent theming */
:root {
  --bg-primary: #f5f4f0;
  --bg-secondary: #ffffff;
  --bg-accent: #000000;
  --text-primary: #2c2c2c;
  --text-secondary: #6b7280;
  --text-light: #9ca3af;
  --border-color: #e5e7eb;
  --shadow-light: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

/* Main reveal container */
.reveal {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-primary);
}

/* Slide backgrounds */
.reveal .slides {
  background: var(--bg-primary);
}

.reveal .slides section {
  background: var(--bg-primary);
  padding: 2rem;
  text-align: left;
}

/* Typography */
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-transform: none;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
}

.reveal h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.reveal h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.reveal h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.reveal p {
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  color: var(--text-primary);
}

/* Lists */
.reveal ul,
.reveal ol {
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
}

.reveal li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* Code blocks */
.reveal pre {
  background: var(--bg-accent);
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-medium);
  font-size: 0.9rem;
  line-height: 1.4;
}

.reveal code {
  background: var(--bg-accent);
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9em;
}

.reveal pre code {
  background: transparent;
  padding: 0;
}

/* Card-style content blocks */
.reveal .card {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: 2rem;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
}

/* Section numbers (like 01, 02, 03) */
.reveal .section-number {
  font-size: 3rem;
  font-weight: 300;
  color: var(--text-light);
  margin-right: 1rem;
  line-height: 1;
}

/* Progress indicators */
.reveal .progress-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Icon boxes (like the HTML/CSS diagram) */
.reveal .icon-box {
  background: var(--bg-accent);
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-medium);
}

.reveal .icon-box h3 {
  color: #ffffff;
  margin-bottom: 0;
}

/* Lesson/chapter listings */
.reveal .lesson-list {
  list-style: none;
  padding: 0;
}

.reveal .lesson-item {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.reveal .lesson-item:last-child {
  border-bottom: none;
}

.reveal .lesson-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-right: 1.5rem;
  min-width: 3rem;
}

.reveal .lesson-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.reveal .lesson-meta {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Completed items */
.reveal .completed {
  opacity: 0.7;
}

.reveal .completed::before {
  content: "✓";
  color: #10b981;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Navigation controls */
.reveal .controls {
  color: var(--text-secondary);
}

.reveal .controls button {
  color: var(--text-secondary);
}

.reveal .controls button:hover {
  color: var(--text-primary);
}

/* Progress bar */
.reveal .progress {
  background: var(--border-color);
}

.reveal .progress span {
  background: var(--bg-accent);
}

/* Slide numbers */
.reveal .slide-number {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
}

/* Custom utility classes */
.reveal .text-center {
  text-align: center;
}

.reveal .text-secondary {
  color: var(--text-secondary);
}

.reveal .text-light {
  color: var(--text-light);
}

.reveal .mb-large {
  margin-bottom: 3rem;
}

.reveal .mt-large {
  margin-top: 3rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .reveal {
    font-size: 16px;
  }
  
  .reveal h1 {
    font-size: 2rem;
  }
  
  .reveal h2 {
    font-size: 1.75rem;
  }
  
  .reveal .slides section {
    padding: 1rem;
  }
  
  .reveal .section-number {
    font-size: 2rem;
  }
}

/* Override default reveal styles */
.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.6;
  font-weight: inherit;
}

.reveal .slides section.has-dark-background,
.reveal .slides section.has-dark-background h1,
.reveal .slides section.has-dark-background h2,
.reveal .slides section.has-dark-background h3,
.reveal .slides section.has-dark-background h4,
.reveal .slides section.has-dark-background h5,
.reveal .slides section.has-dark-background h6 {
  color: #ffffff;
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
