// ============================================
// Array.prototype.forEach - Detailed Examples
// ============================================

// Basic usage: Execute callback for each element
const numbers = [1, 2, 3, 4];
numbers.forEach(n => console.log(n * 2));
// Output: 2, 4, 6, 8

// Access index and array
['a', 'b', 'c'].forEach((item, index, arr) => {
  console.log(`${index}: ${item} (total: ${arr.length})`);
});
// Output: 0: a (total: 3), 1: b (total: 3), 2: c (total: 3)

// Modify external variable
let sum = 0;
[1, 2, 3, 4].forEach(n => {
  sum += n;
});
console.log(sum); // 10

// Modify object properties (mutating)
const users = [
  { name: 'Alice', score: 0 },
  { name: 'Bob', score: 0 }
];
users.forEach(user => {
  user.score += 10;
});
console.log(users); // All scores increased by 10

// Side effects: DOM manipulation
// document.querySelectorAll('.item').forEach(item => {
//   item.classList.add('highlighted');
// });

// Side effects: API calls (be careful!)
// users.forEach(user => {
//   fetch(`/api/users/${user.id}`).then(/* ... */);
// });

// Cannot break early (use for...of or for loop instead)
// This won't work:
// [1, 2, 3, 4].forEach(n => {
//   if (n === 3) break; // SyntaxError!
// });

// Use case: Logging
const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
data.forEach((item, index) => {
  console.log(`Processing item ${index + 1}/${data.length}:`, item);
});

// Use case: Event listener setup
// buttons.forEach(button => {
//   button.addEventListener('click', handleClick);
// });

// Important: forEach returns undefined (not chainable)
const result = [1, 2, 3].forEach(n => n * 2);
console.log(result); // undefined

// Use map if you need a return value:
const doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled); // [2, 4, 6]

// Edge case: Sparse arrays skip empty slots
const sparse = [1, , , 4];
sparse.forEach((item, index) => {
  console.log(`Index ${index}:`, item);
});
// Output: Index 0: 1, Index 3: 4

// Performance: forEach vs for loop
// forEach is slightly slower but more readable
// Use for loop for performance-critical code

