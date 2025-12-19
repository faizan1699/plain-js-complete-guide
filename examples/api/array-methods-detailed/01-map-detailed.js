// ============================================
// Array.prototype.map - Detailed Examples
// ============================================

// Basic usage: Transform each element
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// Transform objects: Extract specific properties
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Transform with index
const indexed = ['a', 'b', 'c'].map((item, index) => `${index}: ${item}`);
console.log(indexed); // ['0: a', '1: b', '2: c']

// Transform to objects
const numbersWithSquares = [1, 2, 3].map(n => ({
  number: n,
  square: n * n
}));
console.log(numbersWithSquares);
// [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }]

// Using with other array methods (chaining)
const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * 2)            // [4, 8]
  .reduce((sum, n) => sum + n, 0); // 12
console.log(result);

// Edge case: Sparse arrays (empty slots are skipped)
const sparse = [1, , , 4];
const mapped = sparse.map(n => n * 2);
console.log(mapped); // [2, empty × 2, 8]

// Important: Always return a value
const bad = [1, 2, 3].map(n => {
  n * 2; // Missing return!
});
console.log(bad); // [undefined, undefined, undefined]

const good = [1, 2, 3].map(n => {
  return n * 2; // Correct!
});
console.log(good); // [2, 4, 6]


