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

**Embedding and Intro to Animations** Bringing external content and motion to your web pages

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

**Introduction to CSS Animations**

**Animations** bring your web pages to life

<!-- element class="fragment" -->

**Two main approaches:**

- **Transitions**: Animate between two states
- **Keyframe Animations**: Complex, multi-step animations

<!-- element class="fragment" -->

Both use **CSS properties** - no JavaScript required!

<!-- element class="fragment" -->

---

**CSS Transform Property**

**Transform** changes an element's appearance without affecting layout

<!-- element class="fragment" -->

```css
.card {
  transform: rotate(45deg);
}
```

<!-- element class="fragment" -->

```css
.card {
  transform: scale(1.5);
}
```

<!-- element class="fragment" -->

```css
.card {
  transform: translate(50px, 100px);
}
```

<!-- element class="fragment" -->

---

**Transform Functions**

**Rotation:**

```css
.card {
  transform: rotate(45deg);
}
.card {
  transform: rotateX(45deg);
}
.card {
  transform: rotateY(45deg);
}
```

<!-- element class="fragment" -->

**Scaling:** <!-- element class="fragment" -->

```css
.card {
  transform: scale(1.5);
}
.card {
  transform: scaleX(2);
}
.card {
  transform: scaleY(0.5);
}
```

<!-- element class="fragment" -->

**Translation (movement):** <!-- element class="fragment" -->

```css
.card {
  transform: translateX(100px);
}
.card {
  transform: translateY(-50px);
}
.card {
  transform: translate(50px, 100px);
}
```

<!-- element class="fragment" -->

---

**Combining Transforms**

**Multiple transforms** in one declaration:

```css
.card {
  transform: rotate(45deg) scale(1.2) translateX(50px);
}
```

<!-- element class="fragment" -->

**Order matters!** Transforms are applied from right to left

<!-- element class="fragment" -->

```css
/* Different results: */
transform: rotate(45deg) translateX(100px);
transform: translateX(100px) rotate(45deg);
```

<!-- element class="fragment" -->

---

**Transform Origin**

**transform-origin** controls the pivot point

<!-- element class="fragment" -->

```css
.card {
  transform: rotate(45deg);
  transform-origin: top left;
}
```

<!-- element class="fragment" -->

**Common values:** <!-- element class="fragment" -->

- `center` (default)
- `top left`, `top right`, `bottom left`, `bottom right`
- `50px 100px` (specific coordinates)
- `50% 25%` (percentage values)

<!-- element class="fragment" -->

---

**CSS Transitions**

**Transitions** animate property changes smoothly

<!-- element class="fragment" -->

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
}
```

<!-- element class="fragment" -->

**Result:** Color changes smoothly over 0.3 seconds on hover

<!-- element class="fragment" -->

---

**Transition Properties**

```css
.button {
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0.1s;
}
```

<!-- element class="fragment" -->

**Shorthand:**

```css
.button {
  transition: background-color 0.3s ease 0.1s;
}
```

<!-- element class="fragment" -->

**Multiple properties:**

```css
.button {
  transition: background-color 0.3s, transform 0.2s;
}
```

<!-- element class="fragment" -->

---

**Timing Functions**

**Controls the animation curve:**

<!-- element class="fragment" -->

```css
transition-timing-function: ease; /* Default */
transition-timing-function: linear; /* Constant speed */
transition-timing-function: ease-in; /* Slow start */
transition-timing-function: ease-out; /* Slow end */
transition-timing-function: ease-in-out; /* Slow start & end */
```

<!-- element class="fragment" -->

**Custom curves:**

```css
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
```

<!-- element class="fragment" -->

---

**Practical Transform + Transition Example**

**HTML:**

```html
<div class="card">
  <h3>Hover me!</h3>
</div>
```

**CSS:**

```css
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

---

**Button Hover Effects**

```css
.button {
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

**Creates a lifting effect** on hover

<!-- element class="fragment" -->

---

**Image Zoom Effect**

```css
.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 100%;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

**Smooth zoom without affecting layout**

<!-- element class="fragment" -->

---

**Loading Spinner with Transform**

```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

<!-- element class="fragment" -->

**Continuous rotation animation**

<!-- element class="fragment" -->

---

**Performance Considerations**

**Fast properties** (GPU accelerated):

- `transform`
- `opacity`

<!-- element class="fragment" -->

**Slow properties (avoid animating):** <!-- element class="fragment" -->

- `width`, `height`
- `margin`, `padding`
- `top`, `left`

<!-- element class="fragment" -->

**Use `transform` instead:** <!-- element class="fragment" -->

```css
/* Slow */
.box {
  left: 100px;
}

/* Fast */
.box {
  transform: translateX(100px);
}
```

<!-- element class="fragment" -->

---

**Common Animation Patterns**

**Fade in:**

```css
.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.fade-in.visible {
  opacity: 1;
}
```

<!-- element class="fragment" -->

**Slide up:** <!-- element class="fragment" -->

```css
.slide-up {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease;
}
.slide-up.visible {
  transform: translateY(0);
  opacity: 1;
}
```

<!-- element class="fragment" -->

---

**Combining Embedding and Animations**

**Animated iframe container:**

```css
.video-container {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.5s ease;
}

.video-container.loaded {
  opacity: 1;
  transform: scale(1);
}
```

<!-- element class="fragment" -->

**Smooth video appearance** when page loads

<!-- element class="fragment" -->

---

**Best Practices Summary**

**For Embedding:**

- Always include `title` attributes
- Use responsive techniques for iframes
- Consider loading performance
- Provide fallback content

<!-- element class="fragment" -->

**For Animations:** <!-- element class="fragment" -->

- Keep animations subtle and purposeful
- Use GPU-accelerated properties
- Test on different devices
- Provide reduced motion options for accessibility

<!-- element class="fragment" -->
