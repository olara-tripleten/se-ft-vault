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

# Deploying to GitHub Pages with Webpack and NPM

---

## Installing the `gh-pages` Package

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website. It's a great way to host project sites, blogs, and portfolios.

To automate the deployment process, we can use the `gh-pages` package from NPM. This package makes it incredibly simple to push the contents of a directory to a `gh-pages` branch on GitHub, which is then automatically published.

To install it as a development dependency, run:

```bash
npm install gh-pages --save-dev
```

<!-- element class="fragment" -->

---

## Configuring `package.json` for Deployment

To make the deployment process seamless, we need to add a few things to our `package.json` file.

1.  **`homepage`:** This field is used to specify the URL where your app will be deployed. For GitHub Pages, it follows the format `https://<username>.github.io/<repository-name>`.

<!-- element class="fragment" -->

2.  **`predeploy` script:** This script will run automatically before the `deploy` script. We'll use it to create a production build of our application.

<!-- element class="fragment" -->

3.  **`deploy` script:** This script will use the `gh-pages` package to push our build directory to the `gh-pages` branch.

<!-- element class="fragment" -->

```json
{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "homepage": "https://my-username.github.io/my-awesome-app",
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
  // ... other configurations
}
```

<!-- element class="fragment" -->

---

## The Deployment Process Explained

Let's break down what happens when you run `npm run deploy`:

1.  **`npm run predeploy` is executed first.** This is a feature of NPM scripts. It runs our `build` script, which in turn runs `webpack --mode production`. Webpack then bundles and optimizes our code, placing the output in the `dist` directory.

<!-- element class="fragment" -->

2.  **`npm run deploy` is executed.** This runs `gh-pages -d dist`.
    - The `gh-pages` command looks for a `gh-pages` branch in your remote repository on GitHub. If one doesn't exist, it will create it for you.
    - It then takes the entire contents of the `dist` directory (specified by the `-d` flag) and pushes it to the `gh-pages` branch.

<!-- element class="fragment" -->

This process ensures that only your production-ready code is deployed, keeping your source code separate.

<!-- element class="fragment" -->

---

## Configuring Your GitHub Repository

For GitHub Pages to work, you need to enable it in your repository settings.

1.  Go to your repository on GitHub.

<!-- element class="fragment" -->

2.  Click on the "Settings" tab.

<!-- element class="fragment" -->

3.  In the left sidebar, click on "Pages".

<!-- element class="fragment" -->

4.  Under "Build and deployment", for the "Source", select "Deploy from a branch".

<!-- element class="fragment" -->

5.  For the branch, select `gh-pages` and keep the folder as `/ (root)`.

<!-- element class="fragment" -->

GitHub will now automatically serve the files from your `gh-pages` branch at the URL you specified in your `package.json`.

<!-- element class="fragment" -->

---

## Verifying the Deployment

After running `npm run deploy`, wait a few minutes for GitHub to publish your site. You can then visit the URL you set in the `homepage` field of your `package.json`.

`https://<username>.github.io/<repository-name>`

<!-- element class="fragment" -->

If you encounter any issues, you can check the deployment status in the "Actions" tab of your GitHub repository. This will show you the logs for the GitHub Pages build and deployment process, which can be helpful for debugging.

<!-- element class="fragment" -->
