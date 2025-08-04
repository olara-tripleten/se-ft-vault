---
marp: true
---

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

## <!-- element class="fragment" -->

**Best Practices**

**Commit Messages**

- Be descriptive and concise
- Use present tense: "Add navigation menu"
- Not: "Added navigation menu"

## <!-- element class="fragment" -->

**Frequency**

- Commit early and often
- Each commit should represent a logical change

## <!-- element class="fragment" -->

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

## <!-- element class="fragment" -->

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

![[tt-logo.svg]]
