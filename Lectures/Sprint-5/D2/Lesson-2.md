---
marp: true
---

# Array methods part 1

---

## Why do we need arrays

Arrays are a fundamental data structure in Javascript. They allow you to store multiple values in a single variable. This is useful when you have a list of items that you want to work with, such as a list of users, products, or scores. Without arrays, you would have to create a separate variable for each item, which would be tedious and difficult to manage. Arrays provide a convenient way to organize and manipulate collections of data.

---

## Merging and joining arrays

- `concat()`: Joins two or more arrays, and returns a new array. This method does not change the existing arrays, but instead returns a new array that contains the elements of the joined arrays.
- `join()`: Joins all elements of an array into a string. You can specify a separator to be used between the elements. If no separator is specified, the elements are separated with a comma.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

const str = arr1.join(" - ");
console.log(str); // "1 - 2 - 3"
```

<!-- element class="fragment" -->

---

## Adding, removing elements

- `push()`: Adds one or more elements to the end of an array and returns the new length of the array.
- `pop()`: Removes the last element from an array and returns that element. This method changes the length of the array.
- `shift()`: Removes the first element from an array and returns that removed element. This method changes the length of the array.
- `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.

---

## Modifying elements at specific positions(splice/slice)

- `splice()`: Adds/Removes elements from an array. This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
- `slice()`: Returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included). The original array will not be modified.

<!-- element class="fragment" -->

### `splice()` Example:

<!-- element class="fragment" -->

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi"); // Adds "Lemon" and "Kiwi" at index 2
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

fruits.splice(2, 2); // Removes 2 elements starting from index 2
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]
```

<!-- element class="fragment" -->

### `slice()` Example:

<!-- element class="fragment" -->

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // Returns ["Orange", "Lemon"]
```

<!-- element class="fragment" -->

---

## Looping through arrays(forEach, map)

- `forEach()`: Executes a provided function once for each array element. This method is a good choice when you want to iterate over an array and perform an action for each element, but you don't need to create a new array.
- `map()`: Creates a new array with the results of calling a provided function on every element in the calling array. This method is a good choice when you want to transform the elements of an array and create a new array with the transformed elements.

<!-- element class="fragment" -->

### `forEach()` Example:

<!-- element class="fragment" -->

```javascript
const numbers = [1, 2, 3];
numbers.forEach((number) => {
  console.log(number);
});
```

<!-- element class="fragment" -->

### `map()` Example:

<!-- element class="fragment" -->

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => {
  return number * 2;
});
console.log(doubled); // [2, 4, 6]
```

<!-- element class="fragment" -->

---

![[tt-logo.svg]]
