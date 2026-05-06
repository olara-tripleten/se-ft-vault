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

# Advanced Express Middleware

note:

Sprint 15 Plan:

- Project Structure: Emphasize to students that Sprint 15's project is different. The lectures are a direct, step-by-step guide
  to completing it. They should aim to be 80-90% finished by the time they reach the formal project lesson.

- Lecture Focus: The first two lectures must thoroughly cover the error and validation middleware, as these are the biggest
  sources of student issues. Walk through the implementation details (how), the reasoning (why), and the specific use cases
  (when).
- Logging Middleware: The logging middleware is simple (mostly copy-paste). If there's extra time in the second lecture, cover
  it. Otherwise, just mention it briefly.

---

## Middleware: A Quick Recap

Remember what Express middleware is?

<!-- element class="fragment" -->

- Functions that have access to the request (`req`), response (`res`), and the `next` function.
- They can execute code, make changes to `req` and `res` objects, end the request-response cycle, or call the next middleware.
- The backbone of Express applications.

<!-- element class="fragment" -->

```javascript
const myMiddleware = (req, res, next) => {
  // Do something here
  console.log("Middleware reporting for duty!");
  next(); // Pass control to the next middleware
};
```

<!-- element class="fragment" -->

---

## Global Middleware

While some middleware runs on specific routes, **global middleware** is applied to _every_ request that comes into your application.

<!-- element class="fragment" -->

You register it using `app.use()` without specifying a path.

```javascript
// This middleware will run for every single request
app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});
```

<!-- element class="fragment" -->

This makes it perfect for tasks that need to happen on every request, like logging, authentication, or... error handling!

<!-- element class="fragment" -->

---

## Why Use Global Middleware?

- **DRY (Don't Repeat Yourself)**: Avoids duplicating code across many different routes.
- **Centralization**: Keeps important, cross-cutting concerns in one place. This makes the code easier to manage, debug, and update.
- **Consistency**: Ensures certain logic (like logging or error formatting) is applied uniformly across your entire application.

---

## Common Global Middlewares

Three of the most common and powerful uses for global middleware are:

<!-- element class="fragment" -->

1.  **Logging**: Recording details about incoming requests (e.g., method, URL, timestamp). Libraries like `morgan` are popular for this.

<!-- element class="fragment" -->

2.  **Request Validation/Sanitization**: Checking incoming data against a schema before it even hits your route handlers. Libraries like `celebrate` (with Joi) or `express-validator` are great for this.

<!-- element class="fragment" -->

3.  **Error Handling**: A centralized place to catch all errors and send a consistent, formatted response to the client.

<!-- element class="fragment" -->

---

## Centralized Error Handling: The Old Way

Until now, we've often handled errors directly where they occur.

```javascript
// middlewares/auth.js

try {
  payload = jwt.verify(token, "some-secret-key");
} catch (err) {
  // Log the error
  console.error(err);

  // Immediately send the response
  return res.status(401).send({ message: "Authorization required" });
}
```

<!-- element class="fragment" -->

What's the problem here? If we want to change our error format, we have to find and change it in many different files.

---

## The Global Error Handler

Express has a special type of middleware just for handling errors. It's unique because it has **four** parameters instead of three.

<!-- element class="fragment" -->

```javascript
app.use((err, req, res, next) => {
  // This is the error handler!
  // The first parameter is the error itself.
});
```

<!-- element class="fragment" -->

**Crucial Rule**: This middleware must be defined at the very end of your `app.js` file, after all other `app.use()` calls and route definitions. It's the final safety net.

<!-- element class="fragment" -->

---

## Triggering the Error Handler

How do we send a request to the error handler?

<!-- element class="fragment" -->

By calling `next()` with an argument.

<!-- element class="fragment" -->

- `next()` -> "Go to the next regular middleware or route handler."
- `next(err)` -> "Skip everything else and go straight to the global error handler."

<!-- element class="fragment" -->

```javascript
// Calling next() with any argument passes the request to the error handler.
// It's best practice to pass an actual Error object.

next(new Error("Authorization error"));
```

<!-- element class="fragment" -->

---

## Setting the Error Status

Okay, we can pass a message. But what about the HTTP status code?

<!-- element class="fragment" -->

A simple way is to add a `statusCode` property to the error object before passing it to `next()`.

```javascript
try {
  payload = jwt.verify(token, "some-secret-key");
} catch (e) {
  const err = new Error("Authorization required");
  err.statusCode = 401; // Set the status here

  next(err);
}
```

<!-- element class="fragment" -->

This works, but we can make it even cleaner and more reusable.

<!-- element class="fragment" -->

---

## A Better Way: Custom Error Classes

For common errors (400, 401, 404), we can create our own error classes that have the `statusCode` built-in.

<!-- element class="fragment" -->

This is a simple `NotFoundError` that inherits from the built-in `Error` class.

<!-- element class="fragment" -->

```javascript
// errors/not-found-err.js

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
```

<!-- element class="fragment" -->

---

## Using Custom Errors

Now, using this error in our controllers becomes much cleaner. We can `throw` the error.

<!-- element class="fragment" -->

```javascript
const NotFoundError = require('../errors/not-found-err');

module.exports.getProfile = (req, res, next) => {
  User.findOne({ _id: req.params.userId })
    .then((user) => {
      if (!user) {
        // If no user, throw our custom error
        throw new NotFoundError('No user with matching ID found');
      }
      res.send(user);
    })
    // ...
```

<!-- element class="fragment" -->

The `throw` statement sends control to the nearest `.catch()` block.

---

## Connecting `throw` to `next()`

How does a `throw` in a `.then()` block get to our global error handler?

<!-- element class="fragment" -->

By terminating our promise chain with a `.catch()` that calls `next`.

```javascript
const NotFoundError = require("../errors/not-found-err");

module.exports.getProfile = (req, res, next) => {
  User.findOne({ _id: req.params.userId })
    .then((user) => {
      if (!user) {
        throw new NotFoundError("No user with matching ID found");
      }
      res.send(user);
    })
    .catch(next); // This is the magic!
};
```

<!-- element class="fragment" -->

`.catch(next)` is a shorthand for `.catch(err => next(err))`. It catches any error from the promise chain (including our `throw`) and passes it directly to the global error handler.

---

## Handling Implicit Errors

What about errors from libraries, like a Mongoose `CastError` for an invalid ID? We can catch them and convert them into our own custom errors.

<!-- element class="fragment" -->

```javascript
// ...
  .catch((err) => {
    if (err.name === "CastError") {
      // If it's a CastError, send our custom BadRequestError
      next(new BadRequestError("The ID string is in an invalid format"));
    } else {
      // Otherwise, pass the original error along
      next(err);
    }
  });
```

<!-- element class="fragment" -->

---

## The Final Error Handler

Our global handler should be smart. If an error arrives without a `statusCode`, it should default to a `500 Internal Server Error`.

<!-- element class="fragment" -->

```javascript
app.use((err, req, res, next) => {
  console.error(err); // Always log the error!

  // If an error has no status, set it to 500
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    // Check the status and display a generic message for a 500 error
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
});
```

<!-- element class="fragment" -->

---

## Rules for Centralized Error Handling

1.  **Always log errors**: `console.error(err)` is your best friend for debugging.
2.  **Terminate promise chains with `.catch(next)`**: This prevents unhandled promise rejections and ensures errors are properly routed.
3.  **Don't `throw` in the final `.catch()`**: It has nowhere to go and will crash your app. Use `next(err)`.
4.  **Handle unknown errors**: If an error has no status, default to a 500 server error.

---

## Conclusion

- Global middleware helps keep code clean and centralized.
- A global error handler is essential for robust Express applications.
- Use custom error classes and `.catch(next)` to streamline your error logic.

![[tt-logo.svg]]
