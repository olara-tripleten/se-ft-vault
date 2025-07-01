
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


**HTML Forms** Building Interactive Web Experiences

Master the fundamentals of collecting user input on the web

---

**What is a Form?** **The Gateway to User Interaction** 

Forms are HTML elements that collect user input and send data to a server

<!-- element class="fragment" -->

```html
<form action="/submit" method="POST">
  <!-- Form elements go here -->
</form>
```

<!-- element class="fragment" -->

- action: Where to send form data <!-- element class="fragment" -->
- method: How to send data (GET or POST) <!-- element class="fragment" -->

---

**Basic Text Input Fields** Capturing User Text

```html
<form class="contact-form">
  <input type="text" name="username" />
  <input type="email" name="email" />
  <input type="password" name="password" />
</form>
```

<!-- element class="fragment" -->

**Common Input Types:** <!-- element class="fragment" -->

- `text` - Basic text input
- `email` - Email validation
- `password` - Hidden text input

<!-- element class="fragment" -->

---

**Labels: Essential for Accessibility** Connecting Inputs with Descriptions

```html
<form class="user-form">
  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" />

  <label for="userEmail">Email Address:</label>
  <input type="email" id="userEmail" name="userEmail" />
</form>
```

**Why Labels Matter:**

- Screen reader accessibility <!-- element class="fragment" -->
- Clickable area expansion <!-- element class="fragment" -->
- Semantic meaning <!-- element class="fragment" -->

---

**Placeholders: Guiding User Input** Providing Input Examples and Hints

```html
<form class="registration-form">
  <input type="text" name="username" placeholder="Enter your username" />

  <input type="email" name="email" placeholder="example@email.com" />

  <input type="tel" name="phone" placeholder="(555) 123-4567" />
</form>
```

<!-- element class="fragment" -->

**Best Practices:** <!-- element class="fragment" -->

- Use placeholders as hints, not replacements for labels
- Provide clear examples of expected format

<!-- element class="fragment" -->

---

**Required Fields: Ensuring Data Completeness** Making Form Fields Mandatory

```html
<form class="contact-form">
  <label for="fullName">Full Name *</label>
  <input type="text" id="fullName" name="fullName" required />

  <label for="contactEmail">Email Address *</label>
  <input type="email" id="contactEmail" name="contactEmail" required />
</form>
```

<!-- element class="fragment" -->

**Required Attribute Benefits:** <!-- element class="fragment" -->

- Client-side validation
- Prevents form submission without data
- Visual indicators for users

<!-- element class="fragment" -->

---

**Min and Max Values** Controlling Input Ranges

```html
<form class="booking-form">
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="120" />

  <label for="quantity">Quantity:</label>
  <input
    type="number"
    id="quantity"
    name="quantity"
    min="1"
    max="10"
    value="1"
  />
</form>
```

<!-- element class="fragment" -->

**Validation Controls:** <!-- element class="fragment" -->

- `min` - Minimum allowed value
- `max` - Maximum allowed value
- `step` - Increment intervals

<!-- element class="fragment" -->

---

**Textarea: Multi-line Text Input** Handling Longer Text Content

```html
<form class="feedback-form">
  <label for="comments">Comments:</label>
  <textarea
    id="comments"
    name="comments"
    rows="4"
    cols="50"
    placeholder="Share your thoughts..."
  >
  </textarea>

  <label for="description">Description:</label>
  <textarea id="description" name="description" maxlength="500"> </textarea>
</form>
```

<!-- element class="fragment" -->

**Textarea Attributes:** <!-- element class="fragment" -->

- `rows` and `cols` - Size dimensions
- `maxlength` - Character limit

<!-- element class="fragment" -->

---

**Select Dropdowns: Choosing from Options** Creating Selection Lists

```html
<form class="preferences-form">
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Choose a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
  </select>

  <label for="skills">Skills:</label>
  <select id="skills" name="skills" multiple>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </select>
</form>
```

<!-- element class="fragment" -->

**Select Features:** <!-- element class="fragment" -->

- `multiple` - Allow multiple selections
- Default empty option for clarity

<!-- element class="fragment" -->

---

**Checkboxes: Multiple Choice Selections** Enabling Multiple Option Selection

```html
<form class="survey-form">
  <fieldset class="interests">
    <legend>Select your interests:</legend>

    <input type="checkbox" id="webdev" name="interests" value="webdev" />
    <label for="webdev">Web Development</label>

    <input type="checkbox" id="design" name="interests" value="design" />
    <label for="design">UI/UX Design</label>

    <input type="checkbox" id="backend" name="interests" value="backend" />
    <label for="backend">Backend Development</label>
  </fieldset>
</form>
```

**Checkbox Characteristics:** <!-- element class="fragment" -->

- Independent selection (can select multiple)
- Same `name` attribute groups related options

<!-- element class="fragment" -->

---

**Radio Buttons: Single Choice Selection** Mutually Exclusive Options

```html
<form class="order-form">
  <fieldset class="delivery">
    <legend>Delivery Method:</legend>

    <input type="radio" id="pickup" name="delivery" value="pickup" />
    <label for="pickup">Store Pickup</label>

    <input type="radio" id="standard" name="delivery" value="standard" />
    <label for="standard">Standard Shipping</label>

    <input type="radio" id="express" name="delivery" value="express" />
    <label for="express">Express Shipping</label>
  </fieldset>
</form>
```

<!-- element class="fragment" -->

**Radio Button Rules:** <!-- element class="fragment" -->

- Same `name` creates a group
- Only one selection per group
- Use `checked` attribute for defaults

<!-- element class="fragment" -->

---

**Submit and Reset Buttons** Form Action Controls

```html
<form class="contact-form">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />

  <div class="form-actions">
    <button type="submit" class="form-actions__submit">Send Message</button>

    <button type="reset" class="form-actions__reset">Clear Form</button>

    <input type="submit" value="Alternative Submit" />
  </div>
</form>
```

<!-- element class="fragment" -->

**Button Types:** <!-- element class="fragment" -->

- `submit` - Sends form data
- `reset` - Clears all form fields
- `button` - Custom JavaScript actions

<!-- element class="fragment" -->

---

**Styling Text Input Fields** Making Forms Visually Appealing

```css
.form {
  max-width: 600px;
  margin: 0 auto;
}

.form__field {
  margin-bottom: 1rem;
}

.form__label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.form__input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}
```

<!-- element class="fragment" -->

---

**Advanced Input Styling** Enhanced Visual States

```css
.form__input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form__input:invalid {
  border-color: #dc3545;
}

.form__input:valid {
  border-color: #28a745;
}

.form__input::placeholder {
  color: #6c757d;
  opacity: 0.7;
}

.form__input[required] + .form__label::after {
  content: " *";
  color: #dc3545;
}
```

---

**Form Validation Best Practices** Ensuring Data Quality and User Experience

**Client-Side Validation:**

- Use HTML5 validation attributes
- Provide immediate feedback
- Never rely solely on client-side validation

<!-- element class="fragment" -->

**Accessibility Considerations:**

- Always use labels
- Provide clear error messages
- Use ARIA attributes when needed

<!-- element class="fragment" -->

**User Experience Tips:**

- Group related fields
- Use logical tab order
- Provide clear instructions

<!-- element class="fragment" -->
---
![[tt-logo.svg]]