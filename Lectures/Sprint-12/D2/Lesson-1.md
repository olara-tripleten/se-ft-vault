
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


# Building a REST API

---

## What is REST?

REST (Representational State Transfer) is an architectural style for designing networked applications. It is based on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used.

<!-- element class="fragment" -->

---

## HTTP Methods

RESTful services use HTTP methods to perform operations on resources.

<!-- element class="fragment" -->

- **GET**: Retrieve a resource
- **POST**: Create a new resource
- **PUT**: Update an existing resource
- **DELETE**: Delete a resource
- **PATCH**: Partially update a resource

<!-- element class="fragment" -->

---

## REST Resource Naming Rules

Resources should be named with nouns, not verbs. The HTTP method should be the verb.

<!-- element class="fragment" -->

- **Good**: `GET /users`, `POST /users`
- **Bad**: `GET /getUsers`, `POST /createUser`

<!-- element class="fragment" -->

Use plural nouns for collections.

<!-- element class="fragment" -->

- `GET /users` - Retrieves a list of users
- `GET /users/123` - Retrieves a specific user

<!-- element class="fragment" -->

---

## Naming Patterns: Examples

Let's use a platform like Instagram as an example.

<!-- element class="fragment" -->
 
---

**Users:**

- `GET /users` - Get a list of all users
- `GET /users/{userId}` - Get a specific user
- `POST /users` - Create a new user

<!-- element class="fragment" -->

---
**Posts by a user:**

- `GET /users/{userId}/posts` - Get all posts from a specific user
- `POST /users/{userId}/posts` - Create a new post for a specific user

<!-- element class="fragment" -->

---
**A specific post:**
- `GET /posts/{postId}` - Get a specific post
- `PUT /posts/{postId}` - Update a specific post
- `DELETE /posts/{postId}` - Delete a specific post

<!-- element class="fragment" -->

---

**Comments on a post:**

- `GET /posts/{postId}/comments` - Get all comments for a post
- `POST /posts/{postId}/comments` - Add a new comment to a post

<!-- element class="fragment" -->

---

## Server Response Status Codes

HTTP status codes indicate the outcome of a request. They are grouped into categories.

---

### **2xx (Success)**

- `200 OK`: The request succeeded. The result of a `GET`.
- `201 Created`: The request succeeded, and a new resource was created. The result of a `POST`.
- `204 No Content`: The request succeeded, but there is no content to return. Used for `DELETE` requests.

<!-- element class="fragment" -->

---
### **4xx (Client Error)**


- `400 Bad Request`: The server cannot process the request due to a client error (e.g., malformed request syntax).
- `401 Unauthorized`: The client must authenticate itself to get the requested response.
- `403 Forbidden`: The client does not have access rights to the content.
- `404 Not Found`: The server cannot find the requested resource.

<!-- element class="fragment" -->

---

### **5xx (Server Error)**

- `500 Internal Server Error`: The server has encountered a situation it doesn't know how to handle.

<!-- element class="fragment" -->

---

## CORS

Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

<!-- element class="fragment" -->

You can use the `cors` middleware in Express to enable CORS.

<!-- element class="fragment" -->

```bash
npm install cors
```

<!-- element class="fragment" -->

```javascript
const cors = require('cors');

app.use(cors());
```

<!-- element class="fragment" -->

---

## Conclusion

Any questions?

![[../../../tt-logo.svg]]
