

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

- **Add to PATH** - Enable command line access with `code` command

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
- 
<!-- element class="fragment" -->

---

**Working with VSCode**

Essential keyboard shortcuts and workflows

**File Management**:

- `Ctrl+N` - New file
- `Ctrl+O` - Open file
- `Ctrl+S` - Save file
- `Ctrl+Shift+S` - Save as

<!-- element class="fragment" -->

**Navigation**:

- `Ctrl+P` - Quick file search
- `Ctrl+Shift+P` - Command palette
- `Ctrl+`` - Toggle terminal

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
- 
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

**You're now ready to start building amazing web projects!**

<!-- element class="fragment" -->