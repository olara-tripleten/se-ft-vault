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

# Working with API's

---

## What is an API?

An API (Application Programming Interface) is a set of definitions and protocols for building and integrating application software. It's the messenger that takes requests and tells a system what you want to do, and then returns the response back to you.

Think of an API like a waiter in a restaurant. You (the client) don't go into the kitchen (the system) to prepare your food. Instead, you give your order (the request) to the waiter (the API), who then communicates it to the kitchen. The waiter then brings the food (the response) back to you. This allows you to get what you need without having to know all the complexities of the kitchen.

<!-- element class="fragment" -->

---

## What is HTTP and how does it work?

HTTP (Hypertext Transfer Protocol) is the protocol used for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response.

Key characteristics of HTTP:

- **Stateless:** Each request is independent. The server does not store any state between requests.

<!-- element class="fragment" -->

- **Text-based:** HTTP messages are human-readable.

<!-- element class="fragment" -->

- **Request-Response:** The client sends a request, and the server sends a response.

<!-- element class="fragment" -->

---

## The HTTP Request/Response Cycle

1.  **The client sends an HTTP request.** This request includes:
    - A **request line**, which specifies the HTTP method (e.g., GET, POST), the URL of the resource, and the HTTP version.
    - **Headers**, which provide additional information about the request (e.g., the type of content the client can accept).
    - An optional **body**, which contains data to be sent to the server (e.g., for a POST request).

<!-- element class="fragment" -->

2.  **The server receives the request and processes it.**

<!-- element class="fragment" -->

3.  **The server sends an HTTP response.** This response includes:
    - A **status line**, which specifies the HTTP version, a status code (e.g., 200 OK, 404 Not Found), and a status message.
    - **Headers**, which provide additional information about the response.
    - An optional **body**, which contains the requested resource (e.g., the HTML of a web page).

<!-- element class="fragment" -->

---

## What is a REST API?

REST (Representational State Transfer) is an architectural style that defines a set of constraints for creating web services. Web services that conform to the REST architectural style, or RESTful web services, provide interoperability between computer systems on the Internet.

Key principles of REST:

- **Client-Server Architecture:** The client and server are separate and can evolve independently.

<!-- element class="fragment" -->

- **Statelessness:** Each request from a client to a server must contain all the information needed to understand and process the request.

<!-- element class="fragment" -->

- **Cacheability:** Responses must define themselves as cacheable or not, to prevent clients from reusing stale or inappropriate data.

<!-- element class="fragment" -->

- **Layered System:** A client cannot ordinarily tell whether it is connected directly to the end server or to an intermediary along the way.

<!-- element class="fragment" -->

- **Uniform Interface:** This is the fundamental principle of REST and simplifies and decouples the architecture.

<!-- element class="fragment" -->

---

## What is JSON?

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.

JSON is built on two structures:

- A collection of name/value pairs. In various languages, this is realized as an _object_, _record_, _struct_, _dictionary_, _hash table_, _keyed list_, or _associative array_.

<!-- element class="fragment" -->

- An ordered list of values. In most languages, this is realized as an _array_, _vector_, _list_, or _sequence_.

<!-- element class="fragment" -->

---

## How to use the `fetch` API

The `fetch()` API provides a modern, promise-based interface for making network requests. It's a powerful and flexible replacement for older methods like `XMLHttpRequest`.

A basic `fetch` request is simple. It takes one argument—the path to the resource you want to fetch—and returns a promise that resolves to the `Response` to that request.

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    // The response is not JSON yet, it's a Response object.
    // We need to call the .json() method to parse the body text as JSON.
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
```

This example shows a simple GET request. `fetch` can also be used for other HTTP methods like POST, PUT, and DELETE by providing an options object as a second argument.
