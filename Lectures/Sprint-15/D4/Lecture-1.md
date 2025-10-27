
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

# Automated Testing


---

# What's Next?

<!-- element class="fragment" -->

So, you've completed the bootcamp. What should you focus on now?

<!-- element class="fragment" -->

- **Strengthen Your Foundations**: Dive deep into Data Structures and Algorithms.
- **Embrace Continuous Learning**: The tech world is always evolving.
- **Explore Career Paths**: Find the specialization that excites you the most.

---

# Strengthen Your Foundations: DS/ALG

<!-- element class="fragment" -->

A strong understanding of Data Structures and Algorithms is crucial for passing technical interviews and writing efficient code.

<!-- element class="fragment" -->

- **Arrays & Strings**
- **Linked Lists**
- **Trees & Graphs**
- **Sorting & Searching**
- **Big O Notation**

<!-- element class="fragment" -->

Start practicing on platforms like LeetCode, HackerRank, or Codewars.

---

# Embrace Continuous Learning

<!-- element class="fragment" -->

The learning doesn't stop here. To stay relevant as a software engineer, you need to be a lifelong learner.

<!-- element class="fragment" -->

- **Read Blogs and Articles**: Follow publications like Smashing Magazine, CSS-Tricks, and Martin Fowler's blog.
- **Listen to Podcasts**: Check out podcasts like Software Engineering Daily, Syntax, and The Changelog.
- **Contribute to Open Source**: Find a project that interests you and start contributing.
- **Attend Meetups and Conferences**: Network with other developers and learn about new technologies.

---

# Explore Career Paths

Based on what you've learned in this bootcamp, here are a few paths you can explore further. Each path represents a specialization within the broader field of software engineering.

---

## Frontend Development



As a frontend developer, you are the architect of the user experience, responsible for everything a user sees and interacts with in a web application. You'll work closely with UI/UX designers to bring their visions to life and with backend developers to consume the data they provide.

<!-- element class="fragment" -->

- **Deepen your JavaScript knowledge**: Master concepts like closures, promises, and async/await.
- **Master React**: You've learned the fundamentals of React. Now, dive deeper into advanced concepts like state management with Context API or libraries like Redux, performance optimization, and testing with libraries like Jest and React Testing Library.
- **Explore other frameworks**: To broaden your skillset, consider learning about other popular frameworks like **Vue.js** or **Angular**.
- **Level up your CSS**: Go beyond the basics and explore modern CSS techniques.
    - **CSS Variables**: For more dynamic and maintainable styling.
    - **CSS Pre-processors**: Learn **SASS/SCSS** to write more organized and powerful CSS.
    - **Utility-First CSS**: Explore frameworks like **Tailwind CSS** for rapid UI development.
- **Learn about web performance and accessibility.**

<!-- element class="fragment" -->

---

## Backend Development


Backend developers are the engineers who work on the server-side of applications. They are responsible for building and maintaining the logic, databases, and APIs that power the frontend. Their work is crucial for everything from business logic and data storage to security and scalability.

<!-- element class="fragment" -->

- **Master a backend language**: Become an expert in Node.js, Python, Java, or Go.
- **Learn about database design and optimization**: SQL and NoSQL databases.
- **Understand system design and architecture**: Learn how to build scalable and resilient systems.
- **Explore cloud platforms**: Get familiar with AWS, Google Cloud, or Azure.

<!-- element class="fragment" -->

---

## DevOps

DevOps engineers are the bridge between development and operations. They create and manage the systems and processes that allow for rapid, reliable, and automated software delivery. Their goal is to shorten the development lifecycle and provide continuous delivery with high software quality.

<!-- element class="fragment" -->

- **Learn about CI/CD pipelines**: Automate the build, test, and deployment process.
- **Master containerization and orchestration**: Docker and Kubernetes are essential skills.
- **Learn about infrastructure as code**: Use tools like Terraform or Ansible to manage your infrastructure.
- **Understand monitoring and logging**: Keep an eye on your applications in production.

<!-- element class="fragment" -->

---

## Mobile Development

<!-- element class="fragment" -->

Mobile developers specialize in creating applications for mobile devices like smartphones and tablets. They can focus on a specific platform (iOS or Android) or develop cross-platform apps that work on both.

<!-- element class="fragment" -->

- **Native Development**:
    - **iOS**: Learn **Swift** and **Xcode**.
    - **Android**: Learn **Kotlin** and **Android Studio**.
- **Cross-Platform Development**:
    - **React Native**: Leverage your React knowledge to build mobile apps.
    - **Flutter**: A popular framework from Google for building beautiful, natively compiled applications.

<!-- element class="fragment" -->

---

## Game Development


Game developers are the creators of the interactive entertainment we love. This field combines creativity with strong technical skills. Game developers can work on everything from the game engine and physics to the gameplay logic and user interface.

<!-- element="fragment" -->

- **Learn a Game Engine**:
    - **Unity**: A popular choice for indie and mobile games, using **C#**.
    - **Unreal Engine**: Known for high-end graphics, using **C++** and its visual scripting system, Blueprints.
- **Master a programming language**: **C#** for Unity or **C++** for Unreal are the most common.
- **Learn about game design principles**: Understand what makes a game fun and engaging.
- **Build a portfolio of small games**: The best way to learn is by doing.

<!-- element class="fragment" -->

---

# Conclusion


This is just the beginning of your journey as a software engineer.

<!-- element class="fragment" -->

Keep learning, keep building, and don't be afraid to ask for help.

<!-- element class="fragment" -->

Good luck!

<!-- element class="fragment" -->

![[tt-logo.svg]]
