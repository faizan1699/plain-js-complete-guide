// ============================================
// Array.prototype.reduce - Detailed Examples
// ============================================

// Basic usage: Sum numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// Without initial value (uses first element)
const sumNoInit = [1, 2, 3].reduce((acc, curr) => acc + curr);
console.log(sumNoInit); // 6

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Group by property
const people = [
  { name: 'Alice', age: 25, city: 'NYC' },
  { name: 'Bob', age: 30, city: 'LA' },
  { name: 'Charlie', age: 25, city: 'NYC' }
];
const groupedByCity = people.reduce((acc, person) => {
  const city = person.city;
  if (!acc[city]) acc[city] = [];
  acc[city].push(person);
  return acc;
}, {});
console.log(groupedByCity);
// { NYC: [{ name: 'Alice', ... }, { name: 'Charlie', ... }], LA: [{ name: 'Bob', ... }] }

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Find maximum value
const max = [3, 7, 2, 9, 1].reduce((acc, curr) => curr > acc ? curr : acc);
console.log(max); // 9

// Transform array to object
const keyValuePairs = [['name', 'Alice'], ['age', 25], ['city', 'NYC']];
const obj = keyValuePairs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log(obj); // { name: 'Alice', age: 25, city: 'NYC' }

// Compose functions (functional programming)
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const addThenMultiply = compose(multiply2, add1);
console.log(addThenMultiply(5)); // (5 + 1) * 2 = 12

// Edge case: Empty array with no initial value throws error
try {
  [].reduce((acc, curr) => acc + curr);
} catch (e) {
  console.log('Error:', e.message); // TypeError
}

// Edge case: Single element with no initial value returns that element
const single = [42].reduce((acc, curr) => acc + curr);
console.log(single); // 42

