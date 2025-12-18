// ============================================
// Array.prototype.find - Detailed Examples
// ============================================

// Basic usage: Find first matching element
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(n => n > 3);
console.log(found); // 4 (first element > 3)

// Find object by property
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob', active: false }

// Find with complex condition
const activeUser = users.find(u => u.active && u.name.startsWith('C'));
console.log(activeUser); // { id: 3, name: 'Charlie', active: true }

// Access index and array
const foundWithIndex = [10, 20, 30, 40].find((n, index, arr) => {
  console.log(`Checking ${n} at index ${index}`);
  return n > 25;
});
console.log(foundWithIndex); // 30

// Returns undefined if not found
const notFound = [1, 2, 3].find(n => n > 10);
console.log(notFound); // undefined

// Check if found before using
const result = users.find(u => u.id === 999);
if (result) {
  console.log('Found:', result);
} else {
  console.log('User not found');
}

// Use case: Find and update
const userToUpdate = users.find(u => u.id === 1);
if (userToUpdate) {
  userToUpdate.name = 'Alice Updated';
}
console.log(users[0]); // { id: 1, name: 'Alice Updated', ... }

// Use case: Find and remove
const index = users.findIndex(u => u.id === 2);
if (index !== -1) {
  users.splice(index, 1);
}
console.log(users); // User with id 2 removed

// Difference from filter: find returns first match, filter returns all
const allEvens = [1, 2, 3, 4, 5].filter(n => n % 2 === 0);
console.log(allEvens); // [2, 4]

const firstEven = [1, 2, 3, 4, 5].find(n => n % 2 === 0);
console.log(firstEven); // 2

// Edge case: Empty array returns undefined
const empty = [].find(n => n > 0);
console.log(empty); // undefined

// Edge case: Sparse arrays
const sparse = [1, , , 4];
const foundInSparse = sparse.find(n => n > 2);
console.log(foundInSparse); // 4

// Performance: Stops at first match (more efficient than filter)
// Use find when you only need the first match

