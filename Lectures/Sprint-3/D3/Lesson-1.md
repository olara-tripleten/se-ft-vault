---
marp: true
---

## Debugging responsive design

---

Step 1: Toggle device toolbar on devtools
![[device-toolbar.png]]

---

What it gives you

![[device-toolbar-tools.png]]

---

From left to right

1. Dimensions <!-- element class="fragment" -->
2. Responsive values<!-- element class="fragment" -->
3. Zoom level<!-- element class="fragment" -->
4. Throttling: Simulate device speed<!-- element class="fragment" -->
5. Device orientation(switched height - width)<!-- element class="fragment" -->
6. Options<!-- element class="fragment" -->

---

See the websites media queries
![[media-queries.png]]

---

## Horizontal overflow

Most common cause is using a fixed width value

---

**Figma 101 for Developers** Design handoff essentials

Learn to extract accurate values from Figma designs <!-- element class="fragment" -->

Understand which measurements matter for development <!-- element class="fragment" -->

Master the difference between padding and margin in design context <!-- element class="fragment" -->

note:

## For instructors

It's really important to open figma and show how it works, most students have never been exposed to any kind of design focused software, Focus on:

- How to see space between one element and the other(padding, margin or gap).
  Answer: by clicking on the `anchor element` and then hover over the other element while holding `alt`/`options`
- For the buttons the student only needs to download the `pen` and `+` icon, but sure to mention that the color and text are done with css and common html, not an image(pretty common error to download the whole button)
- How to see background-colors, border-radius, border styles
- How to see fonts styling

---

**Why Figma Matters for Developers** Bridge the gap between design and code

Figma is your single source of truth for:

- Colors and typography
- Spacing and layout
- Component specifications

<!-- element class="fragment" -->

---

**Essential Values to Extract** Focus on what matters for implementation

**Colors**: Use exact hex/RGB values from the color picker

<!-- element class="fragment" -->

**Typography**: Font family, size, weight, and line-height

<!-- element class="fragment" -->

**Spacing**: Gaps between elements (not always what the design shows)

<!-- element class="fragment" -->

**Dimensions**: Width and height for containers and images(\*)

<!-- element class="fragment" -->

---

**Values to Ignore or Question** Not everything in Figma translates to code

**Absolute positioning**: Rarely matches responsive web behavior

<!-- element class="fragment" -->

**Fixed heights**: Can break with dynamic content

<!-- element class="fragment" -->

**Pixel-perfect spacing**: Sometimes designers eyeball alignments

<!-- element class="fragment" -->

**Complex shadows**: May need CSS simplification

<!-- element class="fragment" -->

---

**Padding vs Margin in Figma** Understanding designer intent vs developer implementation

In Figma: Designers think in terms of visual spacing

```css
/* Designer sees: "20px space around text" */
.card__content {
  padding: 20px;
}
```

<!-- element class="fragment" -->

In Code: We implement based on content relationship <!-- element class="fragment" -->

```css
/* Developer implements: "20px between cards" */
.card + .card {
  margin-top: 20px;
}
```

## <!-- element class="fragment" -->

**Pro Tips for Beginners** Efficient workflow techniques

Tip 1: Right-click elements to copy CSS properties

Tip 2: Use the ruler tool (R) to measure custom spacing

Tip 3: Check multiple screen sizes in the design

Tip 4: Export assets at @2x for retina displays

---

**Reading Figma Spacing** Interpreting design measurements correctly

Auto Layout spacing = CSS gap or margin between items <!-- element class="fragment" -->

Padding values = CSS padding (internal spacing) <!-- element class="fragment" -->

Manual spacing = Measure and decide padding vs margin <!-- element class="fragment" -->

```css
/* Figma Auto Layout: 16px gap */
.card-grid {
  display: flex;
  gap: 16px;
}

/* Figma Padding: 24px */
.card__content {
  padding: 24px;
}
```

<!-- element class="fragment" -->

---

**Common Beginner Mistakes** Avoid these Figma interpretation errors

Mistake 1: Copying exact pixel positions as CSS positioning <!-- element class="fragment" -->

Mistake 2: Not accounting for text overflow and dynamic content <!-- element class="fragment" -->

Mistake 3: Ignoring responsive behavior indicated in design

<!-- element class="fragment" -->

Mistake 4: Using fixed heights when content can vary

## <!-- element class="fragment" -->

![[tt-logo.svg]]
