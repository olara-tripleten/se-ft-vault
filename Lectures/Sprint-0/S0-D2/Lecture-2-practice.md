```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mini CSS Concepts Blog</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="background text font-stack">
  <header class="hero">
    <div class="hero-overlay"></div>
    <h1>CSS Concepts in Action</h1>
  </header>

  <main class="container">
    <section>
      <h2 class="primary-color">Dimensions in Pixels</h2>
      <p>This section is limited to a fixed width of 800px for consistent layout. The padding and margins use pixel values to create spacing.</p>
    </section>

    <section>
      <h2 class="primary-color">Percentages and Proportions</h2>
      <p>The hero section uses percentage-based width and height for responsiveness, while background images scale using <code>background-size: cover</code>.</p>
    </section>

    <section class="bg-example">
      <h2 class="primary-color">Background and Opacity</h2>
      <p>This box has a colored background with partial opacity. The hero section also demonstrates a semi-transparent overlay using <code>rgba</code> for visual contrast.</p>
    </section>

    <section>
      <h2 class="primary-color">Typography and Inheritance</h2>
      <p>All text on this page inherits the font-family defined in the <code>body</code> tag, showing how inheritance works in CSS. Headings override color and font size explicitly.</p>
    </section>
  </main>
</body>
</html>
```

```css
 .primary-color {
  color: #2b6cb0;
}

.background {
  background-color: #f7fafc;
}

.text {
  color: #2d3748;
}

.font-stack {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hero {
  background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e');
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero h1 {
  position: relative;
  font-size: 2.5rem;
  color: white;
  margin: 0;
  z-index: 2;
}

.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

section {
  margin-bottom: 40px;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

section h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

section p {
  line-height: 1.6;
}

.bg-example {
  background-color: #e6fffa;
  padding: 10px;
  border-left: 4px solid #38b2ac;
  opacity: 0.9;
}

```
