// ============================================
// Array.prototype.some & every - Detailed Examples
// ============================================

// ========== SOME ==========
// Returns true if ANY element satisfies condition

// Basic usage: Check if any number is even
const numbers = [1, 3, 5, 7, 8];
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true (8 is even)

// Check if any user is admin
const users = [
  { name: 'Alice', role: 'user' },
  { name: 'Bob', role: 'admin' },
  { name: 'Charlie', role: 'user' }
];
const hasAdmin = users.some(u => u.role === 'admin');
console.log(hasAdmin); // true

// Check if any string contains substring
const words = ['hello', 'world', 'javascript'];
const hasJs = words.some(word => word.includes('js'));
console.log(hasJs); // true

// Short-circuit: Stops at first match
let count = 0;
const result = [1, 2, 3, 4, 5].some(n => {
  count++;
  return n > 3;
});
console.log(result); // true
console.log(count); // 4 (stopped at 4)

// Returns false for empty array
const empty = [].some(n => n > 0);
console.log(empty); // false

// Edge case: All elements fail
const allFail = [1, 2, 3].some(n => n > 10);
console.log(allFail); // false

// ========== EVERY ==========
// Returns true if ALL elements satisfy condition

// Basic usage: Check if all numbers are positive
const allPositive = [1, 2, 3, 4].every(n => n > 0);
console.log(allPositive); // true

// Check if all users are active
const allActive = users.every(u => u.active === true);
console.log(allActive); // false (if any user is inactive)

// Validate form fields
const formData = [
  { field: 'email', value: 'user@example.com' },
  { field: 'password', value: 'secret123' }
];
const allFilled = formData.every(field => field.value.length > 0);
console.log(allFilled); // true

// Short-circuit: Stops at first failure
let checkCount = 0;
const allPass = [1, 2, 3, -1, 5].every(n => {
  checkCount++;
  return n > 0;
});
console.log(allPass); // false
console.log(checkCount); // 4 (stopped at -1)

// Returns true for empty array (vacuous truth)
const emptyEvery = [].every(n => n > 0);
console.log(emptyEvery); // true

// Common pattern: Validate array before processing
const data = [1, 2, 3, 4];
if (data.every(n => typeof n === 'number')) {
  const sum = data.reduce((a, b) => a + b, 0);
  console.log('Sum:', sum);
}

// Comparison: some vs every
const testArray = [2, 4, 6, 8];
console.log(testArray.some(n => n % 2 === 0)); // true (at least one)
console.log(testArray.every(n => n % 2 === 0)); // true (all are even)

const mixedArray = [2, 3, 4, 6];
console.log(mixedArray.some(n => n % 2 === 0)); // true (at least one)
console.log(mixedArray.every(n => n % 2 === 0)); // false (not all are even)

// Use case: Permission checking
const permissions = ['read', 'write', 'delete'];
const canRead = permissions.some(p => p === 'read');
const canAll = permissions.every(p => ['read', 'write'].includes(p));
console.log(canRead); // true
console.log(canAll); // false

