
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


**Working with GitHub**

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

---

**Creating Your First Repository**

**On GitHub:**

1. Click "New Repository"
2. Name your repository 
3. Add description (optional) 
4. Choose public or private 
5. Initialize with README



**Locally:** <!-- element class="fragment" -->

```bash
git clone https://github.com/username/repo-name.git
```
<!-- element class="fragment" -->


---

**Connecting Local and Remote**


```bash
# Add remote repository
git remote add origin https://github.com/username/repo-name.git
```

<!-- element class="fragment" -->

```bash
# Push your changes to GitHub
git push -u origin main
```

<!-- element class="fragment" -->

```bash
# Pull changes from GitHub
git pull origin main
```


<!-- element class="fragment" -->

---

**The Complete Workflow**



```bash
# 1. Make changes to files
echo "Hello World" > index.html
```

<!-- element class="fragment" -->

```bash
# 2. Stage changes
git add index.html
```

<!-- element class="fragment" -->

```bash
# 3. Commit with message
git commit -m "Add homepage structure"
```

<!-- element class="fragment" -->

```bash
# 4. Push to GitHub
git push origin main
```
<!-- element class="fragment" -->
---

**Best Practices**



**Commit Messages**

- Be descriptive and concise
- Use present tense: "Add navigation menu"
- Not: "Added navigation menu"

<!-- element class="fragment" -->
---


**Frequency**

- Commit early and often
- Each commit should represent a logical change

<!-- element class="fragment" -->
---
**Branching**

- Use branches for new features
- Keep main branch stable

---

**Common Git Commands Cheat Sheet**



```bash
git init                    # Initialize repository
git clone <url>            # Copy remote repository
git add <file>             # Stage changes
git commit -m "message"    # Save changes
git push origin main       # Upload to GitHub
git pull origin main       # Download from GitHub
git status                 # Check status
git log                    # View history
git branch                 # List branches
git checkout <branch>      # Switch branches
```

<!-- element class="fragment" -->
---

## Next Steps

- Configuring your github account
  - Create github account
  - Add SSH authentication

---

**Embedding** Bringing external content to your web pages

---

**What is Embedding?**

**Embedding** allows you to include external content directly in your webpage

<!-- element class="fragment" -->

- YouTube videos
- Google Maps
- Social media posts
- Other websites
- Documents and presentations

<!-- element class="fragment" -->

Think of it as creating a **window** to another website within your own page

<!-- element class="fragment" -->

---

# **The `<iframe>` Element**

**iframe** = **inline frame**

```html
<iframe src="https://example.com" width="800" height="600"> </iframe>
```

<!-- element class="fragment" -->

Creates a rectangular area that displays another webpage

<!-- element class="fragment" -->

---

**Basic iframe Syntax**

```html
<iframe src="URL_HERE"></iframe>
```

<!-- element class="fragment" -->

```html hl_lines={[1]}
<iframe src="https://example.com" width="100%" <!-- Not Advised -->
  height="400"
  <!-- Not Advised -->
  >
</iframe>
```

<!-- element class="fragment" -->

```html
<iframe
  src="https://example.com"
  width="100%"
  height="400"
  title="Description for accessibility"
>
</iframe>
```

<!-- element class="fragment" -->

---

**iframe Attributes**

```html
<iframe
  src="https://example.com"
  width="800"
  height="600"
  frameborder="0"
  allowfullscreen
  loading="lazy"
  title="External content"
>
</iframe>
```

<!-- element class="fragment" -->

- **src**: URL of the content to embed
- **width/height**: Dimensions of the frame(Avoid)
- **frameborder**: Border around the iframe (avoid)
- **allowfullscreen**: Enables fullscreen mode
- **loading**: Controls when iframe loads

<!-- element class="fragment" -->

---

Instead of using width/height and frameborder to style the iframes always use css classes

```html
<iframe src="https://example.com" class="iframe"> </iframe>
```

```css
.iframe {
  width: 800px;
  height: 600px;
  border: 0px; /* Removes the default border */
}
```

---

**Embedding YouTube Videos**

**Step 1:** Get the embed code from YouTube

- Click "Share" → "Embed"

<!-- element class="fragment" -->

**Step 2:** Use the provided iframe code

<!-- element class="fragment" -->

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen
>
</iframe>
```

<!-- element class="fragment" -->

**Step 3:** Customize dimensions as needed

<!-- element class="fragment" -->

---

**The `<video>` Element**

**HTML5 native video player**

```html
<video controls width="640" height="480">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  Your browser doesn't support video.
</video>
```

<!-- element class="fragment" -->

- **controls**: Shows play/pause/volume controls
- **Multiple sources**: Browser picks the first supported format

<!-- element class="fragment" -->

---

**Video Element Attributes**

```html
<video controls autoplay muted loop poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
</video>
```

<!-- element class="fragment" -->

- **autoplay**: Starts playing automatically (requires muted)
- **muted**: Starts without sound
- **loop**: Repeats when finished
- **poster**: Thumbnail image before playing

<!-- element class="fragment" -->

---

**The `<audio>` Element**

**HTML5 native audio player**

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  <source src="song.ogg" type="audio/ogg" />
  Your browser doesn't support audio.
</audio>
```

<!-- element class="fragment" -->

**Similar attributes to video:**

<!-- element class="fragment" -->

- `controls`, `autoplay`, `muted`, `loop`
- `preload`: How much to load initially

<!-- element class="fragment" -->

---

**Media Element Best Practices**

**Multiple formats** for compatibility:

<!-- element class="fragment" -->

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <source src="video.ogv" type="video/ogg" />
</video>
```

<!-- element class="fragment" -->

**Always provide fallback content**

<!-- element class="fragment" -->

**Consider file sizes** and loading performance

<!-- element class="fragment" -->

---
