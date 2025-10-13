
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

# Introduction to Authentication and Authorization

---

## Authentication vs. Authorization

**Authentication** is the process of verifying who a user is.
<!-- element class="fragment" -->

**Authorization** is the process of verifying what a user has access to.
<!-- element class="fragment" -->

- **Authentication**: "Are you who you say you are?"
- **Authorization**: "Are you allowed to do that?"

<!-- element class="fragment" -->

---

## Keeping the User Logged In

How do we keep a user logged in after they've authenticated?
<!-- element class="fragment" -->

- **Sessions**: Store a user's login state on the server.
- **Tokens**: Give the user a "key" (token) that they can use to prove they're logged in.

<!-- element class="fragment" -->

---

## Token-Based Authentication

1.  User sends their credentials (e.g., email and password) to the server.
2.  The server verifies the credentials.
3.  If valid, the server generates a token and sends it back to the user.
4.  The user stores the token (e.g., in local storage).
5.  For subsequent requests, the user sends the token in the request headers.
6.  The server verifies the token and grants access to the requested resources.

<!-- element class="fragment" -->

---

## Server-Side Authentication

Let's look at how to handle user creation and login on the server.

---

## What is bcrypt?

bcrypt is a password-hashing function designed by Niels Provos and John Mazières, based on the Blowfish cipher.

<!-- element class="fragment" -->

- It is a popular choice for storing passwords securely.
- The `bcryptjs` library is a pure JavaScript implementation.

<!-- element class="fragment" -->

---

## What are we using it for?

We use bcrypt to hash user passwords before storing them in the database.

<!-- element class="fragment" -->

- This ensures that even if our database is compromised, the attackers won't have access to the users' plaintext passwords.

<!-- element class="fragment" -->

---

## What is a Salt?

In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes a password or passphrase.
<!-- element class="fragment" -->

- Salts are used to safeguard passwords in storage.
- A new salt is randomly generated for each password.

<!-- element class="fragment" -->

---

## How does it work?

bcrypt takes a password and a "salt" and uses them to generate a hash.
<!-- element class="fragment" -->

- The `bcrypt.hash()` function automatically generates a salt and includes it in the resulting hash.
- This means that even if two users have the same password, their hashes will be different.
- It is a "slow" algorithm by design, which makes it resistant to brute-force attacks.

<!-- element class="fragment" -->

---

## Why do we do it?

Storing passwords securely is a critical part of any application that has user accounts.
<!-- element class="fragment" -->

- It protects your users from having their passwords stolen.
- It protects your application from being compromised.
- It is a legal and ethical requirement in many cases.

<!-- element class="fragment" -->

---

## User Creation (Hashing Passwords)

It's crucial to **never** store passwords in plain text. We'll use `bcrypt` to hash them.

```javascript
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// ...

const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({ email, password: hashedPassword, name });
```

<!-- element class="fragment" -->

- We use `bcrypt.hash()` to create a salted and hashed version of the password.
- The second argument to `hash` is the number of "salt rounds". This determines how many times the hashing algorithm is executed. The higher the number, the more secure the hash, but the longer it will take to compute.

<!-- element class="fragment" -->

---

## Logging In a User

When a user tries to log in, we need to compare the password they provided with the hashed password in the database.

```javascript
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// ...

const user = await User.findOne({ email });
if (!user) {
  // Handle user not found
}

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
  // Handle invalid password
}

// If passwords match, user is authenticated
```
<!-- element class="fragment" -->

- We use `bcrypt.compare()` to securely compare the plain-text password with the stored hash.

<!-- element class="fragment" -->

---

## Custom Mongoose Model Methods

We can add a custom method to our User model to make password checking more convenient.

```javascript
// In models/user.js
const userSchema = new mongoose.Schema({
  // ...
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Incorrect email or password'));
      }
      return bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return Promise.reject(new Error('Incorrect email or password'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('User', userSchema);
```
<!-- element class="fragment" -->

Now we can use `User.findUserByCredentials(email, password)` in our login controller.

<!-- element class="fragment" -->

---

## Conclusion

![](../../../tt-logo.svg)
