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

# Working with API's continuation

---

## The Network Panel

The Network panel in your browser's developer tools is your best friend when working with APIs. It gives you a detailed view of all the network requests your application makes. You can see the full request and response, including headers, the body, status codes, and timing information. This is invaluable for debugging and understanding how your application communicates with the server.

To use it, open your browser's developer tools (usually with F12 or Cmd+Opt+I) and click on the "Network" tab. Make sure to check "Preserve log" if you want to see requests that happen before a page navigation.

<!-- element class="fragment" -->

---

## HTTP Methods

HTTP methods (or verbs) tell the server what action the client wants to perform on a resource. While there are many methods, these are the most common ones you'll encounter in REST APIs:

- **GET:** Retrieves a resource. This is a read-only operation and should not have side effects.
- **POST:** Creates a new resource. The data for the new resource is sent in the request body.
- **PUT:** Updates an existing resource. The entire resource is typically replaced with the data in the request body.
- **PATCH:** Partially updates an existing resource. Only the fields that need to be changed are sent in the request body.
- **DELETE:** Deletes a resource.

<!-- element class="fragment" -->

---

## Making a POST Request with `fetch`

To send data to an API, you'll often use a POST request. With `fetch`, you can do this by providing an options object as the second argument, where you specify the method, headers, and the body of the request.

```javascript
const data = { username: "example", score: 100 };

fetch("https://api.example.com/scores", {
  method: "POST", // Specify the method
  headers: {
    "Content-Type": "application/json", // Tell the server we're sending JSON
  },
  body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

<!-- element class="fragment" -->

---

## Handling API Responses

When you receive a response from an API, you need to handle it correctly. The first step is to check the `response.ok` property or the `response.status` code. A status code in the 200-299 range indicates success.

If the request was successful, you can then parse the response body. If the API returns JSON, you can use the `response.json()` method. If it returns text, you can use `response.text()`.

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      // If the server responded with a status code outside the 2xx range,
      // we can throw an error to be caught by the .catch() block.
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Do something with the data
  })
  .catch((error) => {
    // Handle both network errors and HTTP errors
  });
```

<!-- element class="fragment" -->

---

## Robust Error Handling

When working with APIs, things can go wrong. The network could be down, the API server could be unavailable, or you might send an invalid request. It's crucial to handle these errors gracefully.

Here are some common types of errors to consider:

- **Network Errors:** The `fetch` promise will reject with a `TypeError` if a network error occurs (e.g., the user is offline).

<!-- element class="fragment" -->

- **Server Errors:** The API server might return an error response (e.g., a 500 Internal Server Error). The `fetch` promise will _not_ reject in this case, so you need to check `response.ok`.

<!-- element class="fragment" -->

- **Client Errors:** You might send a bad request (e.g., a 400 Bad Request). Again, you need to check `response.ok`.

<!-- element class="fragment" -->

- **JSON Parsing Errors:** The response body might not be valid JSON. This will cause an error when you call `response.json()`.

<!-- element class="fragment" -->

Using a `try...catch` block with `async/await` can make error handling even cleaner.

<!-- element class="fragment" -->

---

## `async/await` for Cleaner Asynchronous Code

`async/await` is syntactic sugar built on top of promises. It lets you write asynchronous code that looks and feels more like synchronous code, which can make it easier to read and understand.

<!-- element class="fragment" -->

- An `async` function always returns a promise.

<!-- element class="fragment" -->

- The `await` keyword can only be used inside an `async` function. It pauses the execution of the function until the promise is resolved, and then resumes with the resolved value.

<!-- element class="fragment" -->

Here's the previous `fetch` example rewritten with `async/await`:

<!-- element class="fragment" -->

```javascript
async function postData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Success:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

<!-- element class="fragment" -->

This structure, with `try...catch`, provides a clear and robust way to handle both network and API errors.

<!-- element class="fragment" -->
