
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

# Express

---

## What is Express.js?

Express is a minimal and flexible Node.js web application framework. It sits on top of the Node.js `http` module and adds a layer of features that make building web servers much easier and faster.

<!-- element class="fragment" -->

### Why use Express?

<!-- element class="fragment" -->

- **Simplified Routing:** Easily define routes for different URLs and HTTP methods.
- **Middleware:** Plug-in additional functionality to handle requests.
- **Template Engines:** Integrate with template engines like Pug or EJS to generate HTML.
- **Request/Response Helpers:** Provides convenient methods on the `req` and `res` objects.

<!-- element class="fragment" -->

---

## Creating a new express project

1.  **`npm init -y`**: This command creates a `package.json` file. This file is the heart of your Node.js project. It contains metadata (like the project name and version) and lists your project's dependencies.

<!-- element class="fragment" -->

2.  **`npm install express`**: This command downloads the Express framework from the npm registry and adds it to your project as a dependency in `package.json`.

<!-- element class="fragment" -->

---

## Adding nodemon for Hot Reload

During development, you'll be making lots of changes. Restarting the server manually every time is tedious. **Nodemon** is a development tool that automatically restarts your server whenever you save a file.

<!-- element class="fragment" -->

**`npm install --save-dev nodemon`**

<!-- element class="fragment" -->
- The `--save-dev` flag tells npm that this is a *development dependency*. It's only needed for development, not for running the application in production.

<!-- element class="fragment" -->

Then, in your `package.json`, add a `dev` script:

<!-- element class="fragment" -->

```json
"scripts": {
  "start": "node index.js", // For production
  "dev": "nodemon index.js" // For development
}
```
<!-- element class="fragment" -->

Now you can run `npm run dev` to start your server with nodemon.

<!-- element class="fragment" -->

---

## Setting an entry point

This is the main file for your Express application.


```javascript
const express = require('express'); // 1. Import express
const app = express(); // 2. Create an express app
const port = 3001; // 3. Define a port

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // req: request object - contains information about the incoming request
  // res: response object - used to send a response back to the client
  res.send('Hello World!');
});

// 5. Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

<!-- element class="fragment" -->

---

## Setting up Routing

Routing determines how your application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

<!-- element class="fragment" -->

```javascript
// GET method route
app.get('/users', (req, res) => {
  res.send('GET request to the users page');
});

// POST method route
app.post('/users', (req, res) => {
  res.send('POST request to the users page');
});
```

<!-- element class="fragment" -->

---

## Route Parameters

Route parameters are named URL segments used to capture values. The captured values are populated in the `req.params` object.



```javascript
// This route path will match requests to /users/34, /users/abc, etc.
app.get('/users/:userId', (req, res) => {
  // The value of userId is available in req.params.userId
  res.send(`You requested user with ID: ${req.params.userId}`);
});

// You can have multiple parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params); // Responds with: { "userId": "...", "bookId": "..." }
});
```

<!-- element class="fragment" -->

This allows for dynamic routing, where you can create flexible URLs that handle a variety of inputs.

<!-- element class="fragment" -->

---

## Basic Middleware

Middleware functions are the heart of Express. They are functions that have access to the `req` and `res` objects, and the `next` function in the request-response cycle.

Middleware can:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

<!-- element class="fragment" -->

```javascript
// A simple logger middleware
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

app.use(requestLogger); // Use this middleware for all requests
```

<!-- element class="fragment" -->

If you don't call `next()`, the request will be left hanging.

<!-- element class="fragment" -->

---

## Parsing a request body

When a client sends data in a POST or PUT request, it's in the body of the request. To access this data, you need to use middleware to parse it.



**`express.json()`** is a built-in middleware that parses incoming requests with JSON payloads. It populates the `req.body` property with the parsed data.

<!-- element class="fragment" -->

```javascript
// This middleware is needed to parse JSON bodies
app.use(express.json());

app.post('/profile', (req, res) => {
  // req.body contains the parsed JSON data
  console.log(req.body);
  res.send(`Profile created for ${req.body.name}`);
});
```

<!-- element class="fragment" -->

Without `express.json()`, `req.body` would be `undefined`.

<!-- element class="fragment" -->

---

## Conclusion

Any questions?

![[../../../tt-logo.svg]]
