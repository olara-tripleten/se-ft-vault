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

# Validating Inbound Server Data

This lesson will provide a theoretical overview and examples of using data validation packages. You’ll implement validation in the next lesson.

---

## Why Validate?

We’ve already seen how to implement validation by defining the mongoose model schema:

```javascript
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    // ...
  },
});
```

<!-- element class="fragment" -->

However, relying solely on Mongoose schemas for validation can leave your application vulnerable.

<!-- element class="fragment" -->

---

## The Problem with Mongoose-Only Validation

- **Security Risks**: Your app can be vulnerable to attacks like DDoS.

- **Performance Issues**: Controller code, including CPU-intensive operations like password hashing, runs _before_ validation.

- **Crashes**: Sending the wrong request body can crash the controller.

<!-- element class="fragment" -->

A hacker could exploit this by sending many requests, overloading the processor, and potentially crashing your application.

<!-- element class="fragment" -->

---

## The Solution: Pre-emptive Validation

It’s common practice to validate an incoming request _before_ it reaches the controller.

If the client doesn’t send what we expect, the controller simply won’t start, and the client will receive an error.

<!-- element class="fragment" -->

To make this possible, we describe the expected request with a schema.

<!-- element class="fragment" -->

---

## Joi and Celebrate

**Joi** is a popular Node.js library for data validation. It allows you to describe data in an intuitive way.

**Celebrate** is a library that wraps Joi validation schemas, allowing them to be used as Express middleware.

<!-- element class="fragment" -->

---

## Joi Schema Example

Here's how you might define a Joi schema for user creation:

```javascript
{
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
    age: Joi.number().integer().required().min(18),
    about: Joi.string().min(2).max(30),
  });
}
```

<!-- element class="fragment" -->

This schema validates the `body` of the request.

<!-- element class="fragment" -->

---

## Using Celebrate as Middleware

First, install and import `celebrate` and `joi`. Then, use `celebrate` as middleware in your route definitions.

```javascript
const { celebrate, Joi } = require("celebrate");

router.post(
  "/posts",
  celebrate({
    body: Joi.object().keys({
      title: Joi.string().required().min(2).max(30),
      text: Joi.string().required().min(2),
    }),
  }),
  createPost
);
```

<!-- element class="fragment" -->

If the request body fails validation, the `createPost` controller won’t run.

<!-- element class="fragment" -->

---

## Validating More Than the Body

`celebrate` can also validate `headers`, `params`, and `query`.

```javascript
const { celebrate, Joi } = require("celebrate");

router.delete(
  "/:postId",
  celebrate({
    // validate parameters
    params: Joi.object().keys({
      postId: Joi.string().alphanum().length(24),
    }),
    // validate headers
    headers: Joi.object().keys({
      // ...
    }),
    // validate query
    query: Joi.object().keys({
      // ...
    }),
  }),
  deletePost
);
```

<!-- element class="fragment" -->

---

## Handling Unknown Fields

By default, Joi doesn’t allow fields that are not listed in the validation object. To change this, use the `unknown()` method.

```javascript
const { celebrate, Joi } = require("celebrate");

router.delete(
  "/:postId",
  celebrate({
    headers: Joi.object()
      .keys({
        // validate headers
      })
      .unknown(true), // Allow unknown headers
  }),
  deletePost
);
```

<!-- element class="fragment" -->

---

## Error Handling with Celebrate

If a request fails validation, `celebrate` passes an error to the error-handling middleware.

<!-- element class="fragment" -->

`celebrate` provides its own error-handling middleware, `errors()`, to generate and send the error response.

<!-- element class="fragment" -->

```javascript
// app.js
const { errors } = require("celebrate");

// ...

// error handlers
app.use(errors()); // Celebrate error handler

// your centralized handler
app.use((err, req, res, next) => {
  // ...
});
```

<!-- element class="fragment" -->

The `errors()` middleware should be placed before your custom error handler.

<!-- element class="fragment" -->

---

## Celebrate Error Response

The error status returned by `celebrate` is `400` (Bad Request). The response body looks like this:

```json
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "child "name" fails because ["name" is required]",
    "validation": {
        "source": "body",
        "keys": [
            "name"
        ]
    }
}
```

<!-- element class="fragment" -->

The `message` field helps the client understand what’s wrong with their request.

<!-- element class="fragment" -->

---

## Conclusion

![[tt-logo.svg]]
