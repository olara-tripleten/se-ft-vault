---
marp: true
---

# Array methods part 2

---

## Understanding callback functions in array methods

A callback function is a function that is passed as an argument to another function. Many of the array methods in Javascript take a callback function as an argument. This allows you to customize the behavior of the array method. A callback function is executed for each element of the array, and it can take up to three arguments: the current element, the index of the current element, and the array itself. This powerful feature allows for a more functional and declarative style of programming, making your code more concise and readable.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
const numbers = [1, 2, 3];

function myCallback(number, index, array) {
  console.log(`Element: ${number}, Index: ${index}, Array: ${array}`);
}

numbers.forEach(myCallback);
```

<!-- element class="fragment" -->

---

## Filtering arrays(filter)

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. The callback function for `filter()` should return a boolean value. If the callback returns `true`, the element is included in the new array; otherwise, it is excluded. This method is perfect for situations where you need to select a subset of an array based on a specific condition.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

<!-- element class="fragment" -->

---

## Checking array elements(some,every, find)

- `some()`: Checks if at least one element in the array passes the test implemented by the provided function. It returns `true` as soon as it finds a matching element and stops iterating through the array.
- `every()`: Checks if all elements in the array pass the test implemented by the provided function. It returns `false` as soon as it finds an element that does not match and stops iterating.
- `find()`: Returns the value of the first element in the array that satisfies the provided testing function. If no element is found, it returns `undefined`.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});
console.log(hasEvenNumber); // true

const allEvenNumbers = numbers.every((number) => {
  return number % 2 === 0;
});
console.log(allEvenNumbers); // false

const firstNumberGreaterThan3 = numbers.find((number) => {
  return number > 3;
});
console.log(firstNumberGreaterThan3); // 4
```

<!-- element class="fragment" -->

---

## Reducing arrays

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reducer function takes four arguments: the accumulator, the current value, the current index, and the source array. The accumulator is the value that is returned by the reducer function in the previous iteration. The `reduce()` method is incredibly versatile and can be used to perform a wide range of operations, such as summing up the elements of an array, flattening an array of arrays, or grouping objects by a specific property.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15
```

<!-- element class="fragment" -->

---

## Sorting arrays(sort)

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. This can lead to unexpected results when sorting numbers. To sort numbers correctly, you need to provide a compare function to the `sort()` method. The compare function should return a negative, zero, or positive value, depending on the arguments.

<!-- element class="fragment" -->

### Example: <!-- element class="fragment" -->

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => {
  return a - b; // Sort in ascending order
});
console.log(numbers); // [1, 2, 3, 4, 5]
```

<!-- element class="fragment" -->

---

![[tt-logo.svg]]
