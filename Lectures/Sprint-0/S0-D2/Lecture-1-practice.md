```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Basics Project</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Welcome to My Styled Page</h1>
    </header>

    <section>
      <h2>About This Page</h2>
      <p>
        This page demonstrates key CSS concepts such as dimensions, backgrounds,
        and typography.
      </p>
    </section>

    <section>
      <h2>More Info</h2>
      <p>
        We’re also exploring how inheritance works and the difference between
        absolute and relative units!
      </p>
    </section>

    <footer>
      <p>Made with 💙 while learning CSS</p>
    </footer>
  </body>
</html>
```

```css
/* Inherited Typography */
body {
  font-family: "Segoe UI", Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

/* Background + Relative Dimensions */
header {
  background-image: url("https://picsum.photos/1200/400");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Typography */
h1 {
  font-size: 3rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
}

/* Section Background + Padding */
section {
  padding: 2rem;
  background-color: lightblue;
  margin: 2rem 1rem;
  border: 1px solid #ccc;
}

/* Font size + absolute/relative units */
h2 {
  font-size: 2em; /* Relative to h2's parent */
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem; /* Root-relative */
  padding: 10px; /* Absolute unit */
}

/* Footer Styling */
footer {
  background-color: #3498db;
  padding: 1rem;
  text-align: center;
  color: white;
}
```
