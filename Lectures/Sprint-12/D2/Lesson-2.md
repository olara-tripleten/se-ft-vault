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

# Databases

---

## What is a Database?

A database is an organized collection of data, generally stored and accessed electronically from a computer system.

<!-- element class="fragment" -->

---

## Relational and Non-Relational

**Relational databases** (like MySQL, PostgreSQL) store data in tables with rows and columns. They use SQL (Structured Query Language).

<!-- element class="fragment" -->

**Non-relational databases** (like MongoDB, Cassandra) store data in a variety of ways, such as document, key-value, wide-column, or graph. They are also known as NoSQL databases.

<!-- element class="fragment" -->

---

## What is MongoDB?

MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. This means fields can vary from document to document and data structure can be changed over time.

<!-- element class="fragment" -->

---

## Connecting to MongoDB from JavaScript via Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

<!-- element class="fragment" -->

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

<!-- element class="fragment" -->

---

## Schemas and models

A **schema** defines the structure of the documents within a collection. A **model** is a constructor compiled from a schema definition. An instance of a model is a document.

<!-- element class="fragment" -->

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);
```

<!-- element class="fragment" -->

---

## Creating, Reading, Updating and Deleting Documents

Mongoose models provide methods for CRUD (Create, Read, Update, Delete) operations.

<!-- element class="fragment" -->

- **Create**: `const user = new User({ name: 'John' }); await user.save();`
- **Read**: `const users = await User.find();`
- **Update**: `await User.updateOne({ name: 'John' }, { age: 30 });`
- **Delete**: `await User.deleteOne({ name: 'John' });`

<!-- element class="fragment" -->

---

## Code Structuring: Controllers

Controllers are used to separate the logic for handling requests from the route definitions. This helps to keep your code organized.

<!-- element class="fragment" -->

**userController.js**
```javascript
const User = require('../models/user');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};
```

<!-- element class="fragment" -->

**userRoutes.js**
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);

module.exports = router;
```

<!-- element class="fragment" -->

---

## Relationships

In database design, relationships define how different types of data are connected. They are crucial for building robust and scalable applications.

### Why are Relationships Important?

- **Data Integrity**: They help maintain consistency. For example, if you delete a user, you might also want to delete all their posts.
- **Query Efficiency**: They allow you to efficiently retrieve related data, like finding all comments for a specific blog post.
- **Real-World Modeling**: Applications often model real-world scenarios where entities are interconnected (e.g., customers and orders, students and courses).

<!-- element class="fragment" -->

---

### Types of Relationships in MongoDB

MongoDB's flexible schema allows for modeling relationships in several ways. Here are the most common types:

---
#### One-to-One (1:1)

Each document in one collection is related to exactly one document in another collection.

**Example**: A `User` and their `UserProfile`.

```javascript
// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserProfile'
  }
});

// UserProfile Schema
const userProfileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
```

<!-- element class="fragment" -->

---

#### One-to-Many (1:N)

A single document in one collection is related to many documents in another.

**Example**: A `User` (author) can have many `Posts`.

```javascript
// User has an array of post IDs
const userSchema = new mongoose.Schema({
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

// Post references a single user
const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
```
This is a common pattern for things like blog posts, comments, or user orders.

<!-- element class="fragment" -->

---

#### Many-to-Many (M:N)

Documents in one collection can be related to many documents in another, and vice-versa.

**Example**: `Students` and `Courses`. A student can enroll in many courses, and a course can have many students.

```javascript
// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

// Course Schema
const courseSchema = new mongoose.Schema({
  name: String,
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
});
```
This allows for complex relationships, like social media followers or product tags.

<!-- element class="fragment" -->

---

## Conclusion

Any questions?

![[../../../tt-logo.svg]]
