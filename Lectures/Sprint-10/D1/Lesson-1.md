# Introduction to React Hooks

---

## What are React Hooks?

Hooks are a powerful and transformative feature introduced in React 16.8. They are functions that let you “hook into” React state and lifecycle features from function components. Before hooks, if you needed to use state or lifecycle methods, you had to convert your function component into a class component. Hooks allow you to use these features in function components, making your code more concise, readable, and reusable.

### Why were Hooks introduced?

The React team introduced hooks to solve several problems they observed with class components:

- **Classes can be confusing:** The `this` keyword in JavaScript works differently than in other languages, which can be a source of confusion for developers. You also need to remember to bind event handlers in the constructor.
- **Wrapper hell:** To reuse stateful logic between components, developers often resorted to patterns like render props and higher-order components. These patterns can lead to a “wrapper hell,” where your component tree is cluttered with layers of components that provide props.
- **Complex components become hard to understand:** In class components, related logic is often split across different lifecycle methods. For example, you might fetch data in `componentDidMount` and set up event listeners, and then clean up those listeners in `componentWillUnmount`. This can make it difficult to follow the logic of a component.

Hooks solve these problems by allowing you to organize your code based on what it does, rather than on when it runs.

### Rules of Hooks

There are two important rules you need to follow when using hooks:

1.  **Only call hooks at the top level:** Don’t call hooks inside loops, conditions, or nested functions. This ensures that hooks are called in the same order each time a component renders, which is how React keeps track of the state of your hooks.
2.  **Only call hooks from React functions:** Don’t call hooks from regular JavaScript functions. You can only call hooks from React function components or from custom hooks.

---

## What is Local State (useState)?

The `useState` hook is the most fundamental hook and is used to add state to your functional components. It takes an initial state as an argument and returns an array containing the current state and a function to update it.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Multiple State Variables

You can use the `useState` hook multiple times in a single component to manage different pieces of state.

```jsx
function Example() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

### State Updates are Asynchronous

It’s important to remember that state updates with `setCount` are asynchronous. This means that when you call `setCount`, React will schedule an update to the state, but it won’t happen immediately. This is to batch multiple state updates together for performance reasons.

### Functional Updates

If you need to update the state based on the previous state, you can pass a function to the state updater function. This function will receive the previous state as an argument and should return the new state.

```jsx
setCount(prevCount => prevCount + 1);
```

This is the recommended way to update state when the new state depends on the previous state, as it avoids potential issues with stale state.

---

## Effects: the useEffect hook

The `useEffect` hook lets you perform side effects in function components. Side effects are operations that affect something outside of the component, such as fetching data from an API, subscribing to a service, or manually manipulating the DOM.

`useEffect` runs after every render, including the first one. It takes a function as its first argument, and this function will be executed after the component renders.

### Comparison with Class Component Lifecycle Methods

The `useEffect` hook can be thought of as a combination of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components.

- **`componentDidMount`:** An effect with an empty dependency array (`[]`) will only run once, after the initial render, which is similar to `componentDidMount`.
- **`componentDidUpdate`:** An effect with a dependency array will run whenever one of the dependencies changes, which is similar to `componentDidUpdate`.
- **`componentWillUnmount`:** The cleanup function returned by an effect is similar to `componentWillUnmount`.

### Cleanup Function

The function passed to `useEffect` can optionally return a cleanup function. This function will be executed before the component is unmounted from the DOM, and also before the effect is re-run.

```jsx
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  };
});
```

---

## Effect Dependencies

The second argument to `useEffect` is an optional dependency array. This array tells React when to re-run the effect.

- **No dependency array:** If you don’t provide a dependency array, the effect will run after every render.
- **Empty dependency array (`[]`):** If you provide an empty dependency array, the effect will only run once, after the initial render.
- **Dependency array with values (`[dep1, dep2]`):** If you provide a dependency array with values, the effect will only re-run if one of the values in the array has changed between renders.

### Common Pitfalls

One common pitfall with the dependency array is forgetting to include all the dependencies that the effect uses. This can lead to bugs where the effect is not re-run when it should be.

The React team provides an ESLint plugin that can help you identify missing dependencies in your effects.

---

## Optimization: useMemo | useCallback

`useMemo` and `useCallback` are hooks that can be used to optimize the performance of your React components. They are used to memoize values and functions, respectively.

### `useMemo`

The `useMemo` hook memoizes the result of a function. It takes a function and a dependency array as arguments, and it will only re-compute the memoized value when one of the dependencies has changed.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

This can be useful for expensive calculations that you don’t want to re-run on every render.

### `useCallback`

The `useCallback` hook memoizes a callback function. It takes a callback function and a dependency array as arguments, and it will only re-create the callback function when one of the dependencies has changed.

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

This is useful when you are passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

### The Cost of Memoization

While `useMemo` and `useCallback` can be useful for optimization, they also have a cost. Memoization uses memory to store the memoized values and functions, and it adds a small amount of overhead to your component.

Therefore, you should only use these hooks when you have identified a performance bottleneck in your application.

---

## Conclusions

Hooks are a powerful and flexible way to add state and side effects to your function components. They allow you to write more concise, readable, and reusable React code.

In this lecture, we have covered the most important hooks: `useState`, `useEffect`, `useMemo`, and `useCallback`. By mastering these hooks, you will be well on your way to becoming a proficient React developer.