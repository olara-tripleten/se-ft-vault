
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


**Setting up Development Environment** Web Development Fundamentals

Essential tools and workflow setup for modern web development

---

**Learning Objectives**

By the end of this lesson, you will be able to:

- Download and install Visual Studio Code

- Install and configure Live Server extension

- Navigate and work efficiently with VSCode interface

- Open and manage project folders in VSCode

- Preview web projects using Live Server

---

**What is Visual Studio Code?**

A powerful, free code editor developed by Microsoft

- **Lightweight yet feature-rich** - Fast startup and performance

- **Cross-platform** - Works on Windows, macOS, and Linux

- **Extensive extension ecosystem** - Thousands of extensions available

- **Built-in Git integration** - Version control made easy

- **IntelliSense support** - Smart code completion and suggestions

---

**Downloading VSCode**

Step-by-step installation process

1. **Visit the official website**: https://code.visualstudio.com

<!-- element class="fragment" -->

2. **Choose your platform**: Windows, macOS, or Linux

<!-- element class="fragment" -->

3. **Download the installer**: Click the download button for your OS

<!-- element class="fragment" -->

4. **Run the installer**: Follow the installation wizard

<!-- element class="fragment" -->

5. **Launch VSCode**: Open the application after installation

<!-- element class="fragment" -->

---

**VSCode Installation Tips**

Important considerations during setup

- **Add to PATH** - Enable command line access with `code` command (macOS only)

<!-- element class="fragment" -->

- **Desktop shortcut** - Create for easy access

<!-- element class="fragment" -->

---

**What is Live Server?**

Essential extension for web development workflow

- **Real-time preview** - See changes instantly in browser

<!-- element class="fragment" -->

- **Auto-refresh** - Browser updates automatically when files change

<!-- element class="fragment" -->

- **Local development server** - Serves files over HTTP protocol

<!-- element class="fragment" -->

- **Cross-device testing** - Access from other devices on same network

<!-- element class="fragment" -->

---

**Installing Live Server Extension**

Quick and easy extension installation

1. **Open Extensions panel**: Click Extensions icon or press `Ctrl+Shift+X`

<!-- element class="fragment" -->

2. **Search for Live Server**: Type "Live Server" in search box

<!-- element class="fragment" -->

3. **Find the official extension**: Look for "Live Server" by Ritwick Dey

<!-- element class="fragment" -->

4. **Install the extension**: Click the "Install" button

<!-- element class="fragment" -->

5. **Reload if prompted**: Restart VSCode if required

<!-- element class="fragment" -->

---

**VSCode Interface Overview**

Understanding the main components

- **Activity Bar** - Left sidebar with main sections (Explorer, Search, Git, etc.)

<!-- element class="fragment" -->

- **Side Bar** - Context-sensitive panel showing files, extensions, etc.

<!-- element class="fragment" -->

- **Editor Groups** - Main area where you write and edit code

<!-- element class="fragment" -->

- **Panel** - Bottom area for terminal, problems, output, debug console

<!-- element class="fragment" -->

- **Status Bar** - Bottom bar showing file info, language mode, Git branch
- <!-- element class="fragment" -->

---

**Working with VSCode**

Essential keyboard shortcuts and workflows

**File Management**:

```
- Ctrl+N 				- New file
- Ctrl+O 				- Open file
- Ctrl+S 				- Save file
- Ctrl+Shift+S 			- Save as
```

<!-- element class="fragment" -->

**Navigation**:

```
Ctrl+P 				- Quick file search
Ctrl+Shift+P 		- Command palette
Ctrl+` 				- Toggle terminal
```

Note: on macOS, `Ctrl` can usually be replaced with `Cmd`. There are exceptions, including the Toggle terminal command, which still uses `Ctrl`.

<!-- element class="fragment" -->

---

**Opening a Project Folder**

Proper project setup in VSCode

**Method 1: File Menu** (Recommended)

1. Click `File` → `Open Folder`
2. Navigate to your project directory
3. Click "Select Folder"

**Method 2: Drag and Drop (Not recommended)<!-- element class="fragment" -->**

1. Open file explorer
2. Drag project folder into VSCode window

<!-- element class="fragment" -->

**Method 3: Command Line <!-- element class="fragment" -->**

1. Open terminal/command prompt
2. Navigate to project folder: `cd path/to/project`
3. Type: `code .`

Note: You'll learn how to use the command line in Sprint 2.

<!-- element class="fragment" -->

---

**Using Live Server**

Previewing your project in the browser

**Method 1: Right-click**

1. Right-click on `index.html` in Explorer
2. Select "Open with Live Server"

<!-- element class="fragment" -->

**Method 2: Status Bar** <!-- element class="fragment" -->

1. Open an HTML file
2. Click "Go Live" in bottom-right status bar

<!-- element class="fragment" -->

**Method 3: Command Palette** <!-- element class="fragment" -->

1. Press `Ctrl+Shift+P`
2. Type "Live Server: Open with Live Server"
3. Press Enter

<!-- element class="fragment" -->

---

**Live Server Features**

Making the most of your development server

- **Default URL**: Usually `http://127.0.0.1:5500` or `http://localhost:5500`

<!-- element class="fragment" -->

- **Auto-refresh**: Browser updates when you save files

<!-- element class="fragment" -->

- **Network access**: Other devices can access via your IP address

<!-- element class="fragment" -->

- **Custom port**: Configure different port if needed

<!-- element class="fragment" -->

- **HTTPS support**: Enable secure connections for testing

<!-- element class="fragment" -->

---

**Useful VSCode Extensions**

Enhancing your development experience

<!-- element class="fragment" -->

**Essential Extensions**:

- **Live Server** - Local development server
- **Prettier** - Code formatter
- Editorconfig
- DOT
- **Auto Rename Tag** - Automatically rename paired HTML tags(Personal recommendation)

<!-- element class="fragment" -->

---

**Troubleshooting Common Issues**

Solutions to frequent problems

**Live Server not working**:

- Ensure HTML file is open and active
- Check if port 5500 is available
- Try restarting VSCode

<!-- element class="fragment" -->

**File not updating in browser**:

- Hard refresh browser (`Ctrl+F5`)
- Clear browser cache
- Check if file is saved (`Ctrl+S`)

<!-- element class="fragment" -->

**VSCode running slowly**:

- Disable unnecessary extensions
- Close unused files and folders
- Restart VSCode

<!-- element class="fragment" -->

---

**Development Workflow**

Efficient coding practices

1. **Open project folder** in VSCode

<!-- element class="fragment" -->

2. **Start Live Server** to preview changes

<!-- element class="fragment" -->

3. **Write code** in VSCode editor

<!-- element class="fragment" -->

4. **Save files** regularly (`Ctrl+S`)

<!-- element class="fragment" -->

5. **Check browser** for real-time updates

<!-- element class="fragment" -->

6. **Use developer tools** for debugging

<!-- element class="fragment" -->

---

**Summary**

Key takeaways from this lesson

<!-- element class="fragment" -->

- **VSCode** is a powerful, free code editor perfect for web development

<!-- element class="fragment" -->

- **Live Server** provides real-time preview capabilities

<!-- element class="fragment" -->

- **Proper project structure** improves organization and maintainability

<!-- element class="fragment" -->

- **Keyboard shortcuts** increase development efficiency

<!-- element class="fragment" -->

- **Extensions** enhance VSCode functionality for specific needs

<!-- element class="fragment" -->
