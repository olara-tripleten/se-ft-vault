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

# Project Building with Webpack

---

## What is building?

In web development, "building" transforms your human-readable source code into an optimized format for web servers. This automated process is crucial for creating efficient, fast, and reliable web applications. It takes everything you've written—JavaScript, CSS, images—and packages it for production.

Key steps in the build process include:

- **Bundling:** Combining multiple JavaScript files into a single file to reduce the number of HTTP requests.

<!-- element class="fragment" -->

- **Transpiling:** Using tools like Babel to convert modern JavaScript (ES6+) into an older version (ES5) that is compatible with a wider range of browsers.

<!-- element class="fragment" -->

- **Minifying:** Removing all unnecessary characters from source code (like whitespace, comments, and newlines) to make files smaller and faster to load.

<!-- element class="fragment" -->

- **Optimizing:** Compressing images, removing unused code (tree-shaking), and applying other performance enhancements.

<!-- element class="fragment" -->

---

## What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js and the world's largest software registry. It's a command-line tool that helps you manage your project's dependencies and run scripts.

With NPM, you can:

<!-- element class="fragment" -->

- **Install packages:** `npm install <package-name>` downloads and saves a package to your project.

<!-- element class="fragment" -->

- **Manage dependencies:** Your project's dependencies are listed in a `package.json` file, making it easy to track and install them with `npm install`.

<!-- element class="fragment" -->

- **Run scripts:** You can define custom scripts in your `package.json` to automate repetitive tasks. For example, a `build` script can run Webpack to bundle your code.

<!-- element class="fragment" -->

- **Share your own packages:** If you create a reusable piece of code, you can publish it to the NPM registry for others to use.

<!-- element class="fragment" -->

note: https://tripleten.com/trainer/web-ft/lesson/4a921689-5719-40f6-892a-d28eb6dea892/?from=program

---

## What is Webpack?

Webpack is a static module bundler for modern JavaScript applications. It analyzes your project's structure, follows the import and export statements, and creates a dependency graph of all your modules. It then bundles them into a small number of files—often just one—that can be easily included in your HTML.

Webpack's main job is to take all your assets—JavaScript, CSS, images, fonts—and turn them into a format that's ready for production.

<!-- element class="fragment" -->

---

## Why do we use Webpack?

Webpack is an essential tool for modern web development for several reasons:

- **Dependency Management:** Webpack understands your project's dependency graph, so it can bundle your modules in the correct order and ensure that all dependencies are met.

<!-- element class="fragment" -->

- **Loaders:** Loaders are transformations that are applied to the source code of a module. They allow you to preprocess files as you `import` or "load" them. For example, you can use a loader to transpile TypeScript to JavaScript or to load a CSS file as a string.

<!-- element class="fragment" -->

- **Plugins:** Plugins are used to customize Webpack's build process in a variety of ways. They can be used for bundle optimization, asset management, and injection of environment variables.

<!-- element class="fragment" -->

- **Development Server:** `webpack-dev-server` provides a simple development server with live reloading. This means that when you make changes to your code, the browser will automatically refresh to show the latest version.

<!-- element class="fragment" -->

- **Code Splitting:** Webpack can split your code into smaller chunks, which can be loaded on demand. This can significantly improve the initial loading time of your application.

<!-- element class="fragment" -->

---

## Spots stage 10

This is a placeholder for the "Spots stage 10" content. You can add the relevant information here.
