// ============================================
// Array.prototype.filter - Detailed Examples
// ============================================

// Basic usage: Filter by condition
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter objects: Keep active users
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ id: 1, name: 'Alice', active: true }, ...]

// Filter by multiple conditions
const adults = users.filter(user => user.active && user.age >= 18);
console.log(adults);

// Filter with index
const firstThree = [1, 2, 3, 4, 5].filter((n, index) => index < 3);
console.log(firstThree); // [1, 2, 3]

// Remove falsy values
const mixed = [0, 1, false, 2, '', 3, null, undefined];
const truthy = mixed.filter(Boolean);
console.log(truthy); // [1, 2, 3]

// Remove duplicates (combined with indexOf)
const duplicates = [1, 2, 2, 3, 3, 3, 4];
const unique = duplicates.filter((value, index, arr) => arr.indexOf(value) === index);
console.log(unique); // [1, 2, 3, 4]

// Filter and transform (chaining with map)
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];
const expensiveNames = products
  .filter(p => p.price > 400)
  .map(p => p.name);
console.log(expensiveNames); // ['Laptop', 'Phone']

// Edge case: Empty array returns empty array
const empty = [].filter(n => n > 0);
console.log(empty); // []

// Edge case: No matches returns empty array
const noMatches = [1, 2, 3].filter(n => n > 10);
console.log(noMatches); // []



