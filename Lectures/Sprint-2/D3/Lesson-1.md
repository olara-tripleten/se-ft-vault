<style>
	* {
		width: 100%;
			text-align: start;
	}
	.controls{
		width: auto;
		text-align: end;
	}
	h1 {
		position: absolute;
		top: 0px;
		left: 0px;
		font-size: 24px !important;
		
	}
	h2 {
		font-size: 48px !important;
		font-weight: light;
	}
	
	p, li {
		font-size: 32px;
	}
</style>

**HTML Forms** Building Interactive Web Experiences

Master the fundamentals of collecting user input on the web

---

**What is a Form?** **The Gateway to User Interaction** <!-- element class="fragment" -->

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
