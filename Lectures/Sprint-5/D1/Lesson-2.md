---
marp: true
---

# Debugging Javascript

---

## Debugging Tools: Console

The browser's console is an essential tool for debugging Javascript. You can use it to log messages, inspect variables, and execute code. To open the console, right-click on the page and select "Inspect", then click on the "Console" tab. The console provides a wealth of information and tools to help you find and fix problems in your code. It's your first line of defense when something goes wrong.

<!-- element class="fragment" -->

### `console.log()`

The `console.log()` method is the most common way to log messages to the console. You can pass any type of data to this method, including strings, numbers, objects, and arrays. This is incredibly useful for tracking the value of variables at different points in your code's execution.

<!-- element class="fragment" -->

### `console.error()`

The `console.error()` method is used to log error messages to the console. Error messages are typically displayed in red and include a stack trace, which can help you identify the source of the error. This is a great way to distinguish critical errors from other log messages.

<!-- element class="fragment" -->

### `console.warn()`

The `console.warn()` method is used to log warning messages to the console. Warning messages are typically displayed in yellow. These are useful for highlighting potential issues that don't necessarily break your application but should be addressed.

---

## How to Read errors

When an error occurs in your Javascript code, the browser will display an error message in the console. The error message typically includes the following information:

- The type of error (e.g., `TypeError`, `ReferenceError`). This tells you the category of the error.
- A description of the error. This provides a more specific message about what went wrong.
- The file name and line number where the error occurred. This is a direct link to the problematic code.
- A stack trace, which shows the sequence of function calls that led to the error. This helps you trace the execution path and understand the context in which the error occurred.

By carefully reading the error message, you can often identify the cause of the error and fix it. Don't be intimidated by error messages; they are your friends in the debugging process.

---

## Error types

There are several types of errors that can occur in Javascript:

- `SyntaxError`: Occurs when the code is not written correctly. This is often due to a typo, a missing bracket, or some other violation of the Javascript syntax rules.
- `ReferenceError`: Occurs when you try to use a variable that has not been declared. This is a common error when you misspell a variable name or try to access a variable that is out of scope.
- `TypeError`: Occurs when you try to perform an operation on a value of the wrong type. For example, trying to call a method on a `null` or `undefined` value.
- `RangeError`: Occurs when you try to use a number that is outside the allowed range. For example, trying to create an array with a negative length.
- `URIError`: Occurs when you use an invalid URI. This can happen when you are working with functions like `encodeURI()` or `decodeURI()`.

---

## The debugger

The `debugger` statement can be used to pause the execution of your code at a specific point. When the browser encounters a `debugger` statement, it will open the debugger and allow you to inspect the state of your application. You can then step through the code line by line, inspect variables, and execute code in the console. This is an incredibly powerful tool for understanding the flow of your program and identifying the exact point where something goes wrong. You can set breakpoints directly in the browser's developer tools without modifying your code, which is often a more convenient approach.

<!-- element class="fragment" -->

### Example:

```javascript
function myFunction() {
  let x = 10;
  debugger; // Pause the execution here
  console.log(x);
}
```

---

## Hypothesis-Driven Debugging

Hypothesis-driven debugging is a systematic approach to debugging that involves the following steps:

1. **Formulate a hypothesis:** Based on the error message and your understanding of the code, formulate a hypothesis about the cause of the error. What do you think is going wrong?
2. **Test the hypothesis:** Design an experiment to test your hypothesis. This may involve adding `console.log()` statements to check the value of variables, using the debugger to step through the code, or modifying the code to see if it fixes the problem.
3. **Analyze the results:** Analyze the results of your experiment to determine if your hypothesis was correct. If it was, you can fix the error. If not, you can formulate a new hypothesis and repeat the process. This iterative process of hypothesizing, testing, and analyzing will eventually lead you to the root cause of the bug.

---![[tt-logo.svg]]
