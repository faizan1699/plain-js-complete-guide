// ============================================
// Array.prototype.sort - Detailed Examples
// ============================================

// WARNING: sort() mutates the original array!

// Basic usage: Sort numbers (WRONG - converts to strings!)
const wrong = [10, 2, 5, 1, 9];
wrong.sort();
console.log(wrong); // [1, 10, 2, 5, 9] (lexicographic order!)

// Correct: Sort numbers ascending
const numbers = [10, 2, 5, 1, 9];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 9, 10]

// Sort numbers descending
const desc = [10, 2, 5, 1, 9];
desc.sort((a, b) => b - a);
console.log(desc); // [10, 9, 5, 2, 1]

// Sort strings alphabetically
const words = ['banana', 'apple', 'cherry'];
words.sort();
console.log(words); // ['apple', 'banana', 'cherry']

// Sort strings case-insensitive
const mixedCase = ['Banana', 'apple', 'Cherry'];
mixedCase.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(mixedCase); // ['apple', 'Banana', 'Cherry']

// Sort objects by property
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];
users.sort((a, b) => a.age - b.age);
console.log(users); // Sorted by age ascending

// Sort by multiple criteria
const products = [
  { name: 'Laptop', price: 1000, rating: 4.5 },
  { name: 'Phone', price: 500, rating: 4.5 },
  { name: 'Tablet', price: 300, rating: 4.0 }
];
products.sort((a, b) => {
  // First by rating (descending)
  if (b.rating !== a.rating) {
    return b.rating - a.rating;
  }
  // Then by price (ascending)
  return a.price - b.price;
});
console.log(products);

// Stable sort: Preserve order of equal elements (ES2019+)
const stable = [
  { name: 'A', order: 1 },
  { name: 'B', order: 2 },
  { name: 'C', order: 1 }
];
stable.sort((a, b) => a.order - b.order);
// Order of A and C is preserved

// Sort dates
const dates = [
  new Date('2024-01-15'),
  new Date('2024-03-10'),
  new Date('2024-02-20')
];
dates.sort((a, b) => a - b); // Ascending (earliest first)
console.log(dates);

// Custom comparator: Sort by string length
const strings = ['a', 'ccc', 'bb', 'dddd'];
strings.sort((a, b) => a.length - b.length);
console.log(strings); // ['a', 'bb', 'ccc', 'dddd']

// Edge case: Empty array
const empty = [];
empty.sort();
console.log(empty); // []

// Edge case: Single element
const single = [42];
single.sort();
console.log(single); // [42]

// Edge case: Array with undefined/null
const withNulls = [3, null, 1, undefined, 2];
withNulls.sort((a, b) => {
  if (a == null) return 1;  // null/undefined go to end
  if (b == null) return -1;
  return a - b;
});
console.log(withNulls); // [1, 2, 3, null, undefined]

// Create sorted copy (without mutating original)
const original = [3, 1, 4, 1, 5];
const sorted = [...original].sort((a, b) => a - b);
console.log(original); // [3, 1, 4, 1, 5] (unchanged)
console.log(sorted); // [1, 1, 3, 4, 5]

// Common mistake: Forgetting return value
const bad = [1, 2, 3];
bad.sort((a, b) => {
  a - b; // Missing return!
});
console.log(bad); // May not sort correctly

// Best practice: Always return comparison result
const good = [1, 2, 3];
good.sort((a, b) => {
  return a - b; // Correct!
});

