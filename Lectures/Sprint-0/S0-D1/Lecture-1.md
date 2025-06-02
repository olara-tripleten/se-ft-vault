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

#### Software Engineering

Introduction to tripletens platform(https://tripleten.com)
- Dashboard <!-- element class="fragment" -->
- Sprints <!-- element class="fragment" -->
- Chapters <!-- element class="fragment" -->
- Tasks <!-- element class="fragment" -->

Note: This will be after orientation

---
Your dashboard:

![[platform-dashboard.png]]
---

Current Sprint

![[platform-current-chapter.png]]
---
Sprints

![[platform-sprints.png]]
---

Sprint chapters:

![[platform-sprint-details.png]]
---
Theory Vs Practice

![[platform-sprint-chapter.png]]

---

Theory

![[platform-lesson-theory.png]]
---
Practice
![[platform-lesson-practice.png]]
---
Support & Dot
![[platform-lesson-practice 1.png]]
note:   

---
Main sections

![[platform-lesson-practice-grid.png]]
---
Hints & Theory

![[platform-lesson-theory&hints.png]]

---
Actions

![[platform-lesson-actions.png]]
---
# HTML 101

_HyperText Markup Language_

<!-- element class="fragment" -->

The technology that defines the **content and structure** of any website

<!-- element class="fragment" -->

When written properly, it displays information hierarchy in a meaningful way for screen readers

<!-- element class="fragment" -->

---

## HTML Tags

Tags are how we define, display, and structure website content

 <!-- element class="fragment" -->

**Open / Closing Tags:**

 <!-- element class="fragment" -->

```html
<html></html>
```

<!-- element class="fragment" -->

**Self-Closing Tags:**

 <!-- element class="fragment" -->

```html
<img />
```

 <!-- element class="fragment" -->

---

### Critical Rule: Tags Must Close in the correct order
When closing a tag, you must close the last tag that was opened.

**❌ Incorrect:**

<!-- element class="fragment" -->

```html
<tag>
  <tag2>
	<tag3>
	</tag2> <!-- wrong -->
  </tag3>
</tag>
```

<!-- element class="fragment" -->

**✅ Correct:**

<!-- element class="fragment" -->

```html
<tag>
  <tag2>
    <tag3>
    </tag3> <!-- correct -->
  </tag2>
</tag>
```

<!-- element class="fragment" -->

_This is one of the most common HTML errors!_

<!-- element class="fragment" -->

---

## Types of Tags

Two main categories:

- **Structural Tags** <!-- element class="fragment" -->
- **Content Tags** <!-- element class="fragment" -->

---

## Structural Tags

_Used to group elements_

**Basic Page Structure:**

<!-- element class="fragment" -->

```html
<header></header>
<main></main>
<footer></footer>
```

<!-- element class="fragment" -->

**Other Structural Tags:**

<!-- element class="fragment" -->

```html
<div>
  <!-- Generic Block -->
  <article>
    <section>
      <nav>
        <table></table>
      </nav>
    </section>
  </article>
</div>
```

<!-- element class="fragment" -->

---

## Content Tags

_Used to display data_, like paragraphs, images, videos,

---

**Titles:**

```html
<h1>Website General Title</h1>
<h2>Section title</h2>
<h3>Article Title</h3>
<h4>Subtitle 1</h4>
<h5>Subtitle 2</h5>
<h6>Subtitle 3</h6>
```

<!-- element class="fragment" -->

---

Text Content Tags

```html
<p>Paragraph</p>
<b>Bold text</b>
<i>Italic Text</i>
<span>Generic Text</span>
```

<!-- element class="fragment" -->

---

Media Content

```html
<!-- This is the one we'll use the most -->
<img />

<!-- Less used -->
<video>
  <audio></audio>
</video>
```

<!-- element class="fragment" -->

---

## HTML Hierarchy

An html file has a sort of hierarchy defined by levels of "nesting"

Best practice: Use **indentation** to show this hierarchy clearly

<!-- element class="fragment" -->

---

**❌ Poorly Formatted:**

```html
<main>
<section>
	<div>
	<p></p>
	</div>
<article>
	<h2></h2>
		<div>
		<p></p>
	</div>
</article>
</section>
</main>
```

<!-- element class="fragment" -->

---

**✅ Properly Formatted:**

```html
<main>
  <section>
    <div>
      <p></p>
    </div>
    <article>
      <h2></h2>
      <div>
        <p></p>
      </div>
    </article>
  </section>
</main>
```

<!-- element class="fragment" -->

---

## HTML Attributes

Additional values that configure elements or adjust their behavior

Format: `key="value"`

<!-- element class="fragment" -->

**Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes

<!-- element class="fragment" -->

---

Most commonly used **Attributes**

```html
<!-- Classes can be applied to multiple elements. -->
<!-- They let you apply CSS styles to the entire group. -->
<p class="user-description"></p>

<!-- An id should always be unique. -->
<!-- You can use it to apply styles to specific elements. -->
<!-- But it's most commonly used to enable Javascript -->
<h2 id="user-name">Username</h2>

<!-- 
	src is the "Path" to the image you want to display 
-->
<img src="user-avatar.jpg" />
```

<!-- element class="fragment" -->

---

A html element can have as many attributes as it needs

```html
<img src="user-avatar.jpg" class="profile-avatar" id="avatar" />
```

<!-- element class="fragment" -->

---

## Next Steps

- Practice HTML structure and tags
- Learn CSS for styling
- Combine HTML + CSS for complete frontend development
