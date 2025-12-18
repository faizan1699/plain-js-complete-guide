// ============================================
// Array.prototype.flat & flatMap - Detailed Examples
// ============================================

// ========== FLAT ==========
// Flattens nested arrays by specified depth

// Basic usage: Flatten one level (default depth = 1)
const nested = [1, [2, 3], [4, 5]];
const flattened = nested.flat();
console.log(flattened); // [1, 2, 3, 4, 5]

// Flatten multiple levels
const deeplyNested = [1, [2, [3, [4]]]];
const flat1 = deeplyNested.flat(1); // One level
console.log(flat1); // [1, 2, [3, [4]]]

const flat2 = deeplyNested.flat(2); // Two levels
console.log(flat2); // [1, 2, 3, [4]]

const flatAll = deeplyNested.flat(Infinity); // All levels
console.log(flatAll); // [1, 2, 3, 4]

// Remove empty slots (sparse arrays)
const sparse = [1, , , 4];
const flatSparse = sparse.flat();
console.log(flatSparse); // [1, 4]

// Edge case: Empty array
const empty = [].flat();
console.log(empty); // []

// Edge case: Already flat
const flat = [1, 2, 3].flat();
console.log(flat); // [1, 2, 3]

// ========== FLATMAP ==========
// Maps each element then flattens result by depth 1

// Basic usage: Map and flatten
const numbers = [1, 2, 3];
const doubled = numbers.flatMap(n => [n, n * 2]);
console.log(doubled); // [1, 2, 2, 4, 3, 6]

// Equivalent to: map().flat()
const equivalent = numbers.map(n => [n, n * 2]).flat();
console.log(equivalent); // [1, 2, 2, 4, 3, 6]

// Filter and map in one operation
const words = ['hello world', 'foo bar', 'baz'];
const allWords = words.flatMap(str => str.split(' '));
console.log(allWords); // ['hello', 'world', 'foo', 'bar', 'baz']

// Remove empty results
const data = [1, 2, 3, 4, 5];
const evensOnly = data.flatMap(n => n % 2 === 0 ? [n] : []);
console.log(evensOnly); // [2, 4]

// Expand objects
const users = [
  { name: 'Alice', hobbies: ['reading', 'coding'] },
  { name: 'Bob', hobbies: ['gaming'] }
];
const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies); // ['reading', 'coding', 'gaming']

// Use case: Process and flatten API responses
const responses = [
  { data: [1, 2] },
  { data: [3, 4] },
  { data: [5] }
];
const allData = responses.flatMap(res => res.data);
console.log(allData); // [1, 2, 3, 4, 5]

// Use case: Generate pairs
const items = ['a', 'b', 'c'];
const pairs = items.flatMap((item, i) => 
  items.slice(i + 1).map(other => [item, other])
);
console.log(pairs); // [['a', 'b'], ['a', 'c'], ['b', 'c']]

// Performance: flatMap is more efficient than map().flat()
// Use flatMap when you need to map and flatten

// Edge case: Empty array
const emptyFlatMap = [].flatMap(n => [n, n * 2]);
console.log(emptyFlatMap); // []

// Edge case: Returns empty arrays
const emptyResults = [1, 2, 3].flatMap(n => []);
console.log(emptyResults); // []

// Common pattern: Filter and transform
const numbers2 = [1, 2, 3, 4, 5];
const doubledEvens = numbers2.flatMap(n => 
  n % 2 === 0 ? [n * 2] : []
);
console.log(doubledEvens); // [4, 8]

