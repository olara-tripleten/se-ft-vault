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

# Server-Side Development with Node.js

---

## What is backend development?

Backend development is the engine of a web application. It's everything that happens behind the scenes, invisible to the user.

<!-- element class="fragment" -->

While the **frontend** is what you see and interact with in your browser (buttons, text, images), the **backend** is responsible for:

<!-- element class="fragment" -->

- **Storing and managing data:** Using databases to save user information, posts, products, etc.
- **Authentication/Authorization:** Handling user login, registration, and ensuring users are who they say they are.
- **Business Logic:** Implementing the core rules and processes of the application.
- **APIs (Application Programming Interfaces):** Providing a way for the frontend to talk to the backend.

<!-- element class="fragment" -->

---

## Node.js Servers

Node.js lets us run JavaScript on the server, outside of a browser. We can create a web server using the built-in `http` module.

<!-- element class="fragment" -->

```javascript
const http = require("http"); // 1. Import the http module

// 2. Create a server object
const server = http.createServer((req, res) => {
  // req: request object (what the client is asking for)
  // res: response object (what we send back)

  // 3. Send a response
  res.statusCode = 200; // OK
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World"); // End the response and send this text
});

// 4. Start listening for requests
server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
```

<!-- element class="fragment" -->

This code creates a server that listens on port 3000. When you visit `http://127.0.0.1:3000/` in your browser, the server will send back the text "Hello World".

<!-- element class="fragment" -->

---

## Handling Different Routes

What if we want to send different responses for different URLs? We can check the `req.url` property.

<!-- element class="fragment" -->

```javascript
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page!");
  } else if (req.url === "/about") {
    res.end("This is the about page.");
  } else {
    res.statusCode = 404; // Not Found
    res.end("Page not found");
  }
});
```

<!-- element class="fragment" -->

This is a basic form of routing. As you can see, it can get complicated quickly. This is one reason why we use frameworks like Express.js.

<!-- element class="fragment" -->

---

## Request Body - Streams

When a client sends data to a server (e.g., from a form), the data arrives in chunks. Node.js uses **streams** to handle this efficiently. A stream lets you read data in small pieces as it arrives, instead of waiting for all of it to be there before you can start working with it.

<!-- element class="fragment" -->

```javascript
let body = [];
req
  .on("data", (chunk) => {
    // This event fires whenever a new chunk of data arrives
    console.log(`Received chunk: ${chunk}`);
    body.push(chunk);
  })
  .on("end", () => {
    // This event fires when all chunks have been received
    body = Buffer.concat(body).toString();
    // Now, `body` has the entire request body as a string
    console.log(`Full body: ${body}`);
  });
```

<!-- element class="fragment" -->

We listen for `data` events, collect the chunks in an array, and then on the `end` event, we put them all together.

<!-- element class="fragment" -->

---

## Creating Modules

Node.js uses the CommonJS module system. This allows you to split your code into multiple files to keep it organized. You can `export` functionality from one file and `require` it in another.

<!-- element class="fragment" -->

**`greetings.js`**

<!-- element class="fragment" -->

```javascript
const sayHello = (name) => {
  return `Hello, ${name}!`;
};

const sayGoodbye = (name) => {
  return `Goodbye, ${name}!`;
};

// Export an object with multiple functions
module.exports = {
  sayHello,
  sayGoodbye,
};
```

<!-- element class="fragment" -->

**`app.js`**

<!-- element class="fragment" -->

```javascript
// Import the greetings module
const greetings = require("./greetings");

console.log(greetings.sayHello("Alice")); // "Hello, Alice!"
console.log(greetings.sayGoodbye("Bob")); // "Goodbye, Bob!"
```

<!-- element class="fragment" -->

---

## Working With File Systems

The `fs` (File System) module is a powerful part of Node.js that lets you interact with the computer's file system.

<!-- element class="fragment" -->

### Asynchronous vs. Synchronous

<!-- element class="fragment" -->

Most `fs` methods have both asynchronous (non-blocking) and synchronous (blocking) versions.

<!-- element class="fragment" -->

- **Asynchronous:** `fs.readFile()` - The server can continue to handle other requests while the file is being read. This is preferred.
- **Synchronous:** `fs.readFileSync()` - The server will block and wait for the file to be read before doing anything else.

<!-- element class="fragment" -->

### Writing a file

<!-- element class="fragment" -->

```javascript
const fs = require("fs");

const content = "This is the content of the file.";

// Asynchronously write to a file
fs.writeFile("newFile.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been written successfully!");
});
```

<!-- element class="fragment" -->

---

## Server Testing - Postman

Postman is an essential tool for backend developers. It lets you create and send any kind of HTTP request to your server, so you can test your API without needing a frontend application.

<!-- element class="fragment" -->

### Key Features:

<!-- element class="fragment" -->

- **Send Requests:** Easily create GET, POST, PUT, DELETE, etc. requests.
- **Parameters & Headers:** Add query parameters, headers, and request bodies.
- **Inspect Responses:** View the status code, headers, and body of the server's response.
- **Collections:** Save your requests in collections to easily run them again later.

<!-- element class="fragment" -->

---

## Conclusion

Any questions?

![[../../../tt-logo.svg]]
