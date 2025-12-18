// ============================================
// Array.prototype.concat & includes - Detailed Examples
// ============================================

// ========== CONCAT ==========
// Returns NEW array (non-mutating)

// Basic usage: Combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3] (unchanged)

// Concatenate multiple arrays
const arr3 = [7, 8];
const all = arr1.concat(arr2, arr3);
console.log(all); // [1, 2, 3, 4, 5, 6, 7, 8]

// Concatenate with values
const withValues = arr1.concat(4, 5, 6);
console.log(withValues); // [1, 2, 3, 4, 5, 6]

// Flatten nested arrays (one level)
const nested = arr1.concat([4, [5, 6]]);
console.log(nested); // [1, 2, 3, 4, [5, 6]]

// Use spread operator instead (modern approach)
const modern = [...arr1, ...arr2];
console.log(modern); // [1, 2, 3, 4, 5, 6]

// Edge case: Empty arrays
const empty = [].concat([1, 2], []);
console.log(empty); // [1, 2]

// Edge case: Concatenating with non-arrays
const mixed = [1, 2].concat('hello', 3);
console.log(mixed); // [1, 2, 'hello', 3]

// ========== INCLUDES ==========
// Returns boolean (ES2016)

// Basic usage: Check if value exists
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(10)); // false

// Check strings
const words = ['apple', 'banana', 'cherry'];
console.log(words.includes('banana')); // true
console.log(words.includes('grape')); // false

// Case-sensitive
const mixedCase = ['Apple', 'Banana'];
console.log(mixedCase.includes('apple')); // false
console.log(mixedCase.includes('Apple')); // true

// From index: Start search from specific position
const arr = [1, 2, 3, 2, 1];
console.log(arr.includes(2)); // true
console.log(arr.includes(2, 3)); // true (found at index 3)
console.log(arr.includes(2, 4)); // false (not found after index 4)

// Negative index: Count from end
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.includes(3, -3)); // true (search from index 2)
console.log(arr2.includes(1, -3)); // false (1 is before index 2)

// Check objects (doesn't work - uses === comparison)
const objects = [{ id: 1 }, { id: 2 }];
console.log(objects.includes({ id: 1 })); // false (different reference)

// Use some() for object comparison
const hasObject = objects.some(obj => obj.id === 1);
console.log(hasObject); // true

// Edge case: NaN handling
const withNaN = [1, 2, NaN, 4];
console.log(withNaN.includes(NaN)); // true (unlike indexOf)
console.log(withNaN.indexOf(NaN)); // -1 (indexOf can't find NaN)

// Edge case: Empty array
const empty = [];
console.log(empty.includes(1)); // false

// Performance: includes is faster than indexOf !== -1
const large = Array.from({ length: 1000000 }, (_, i) => i);
console.time('includes');
large.includes(999999);
console.timeEnd('includes');

console.time('indexOf');
large.indexOf(999999) !== -1;
console.timeEnd('indexOf');

// Common pattern: Conditional logic
const permissions = ['read', 'write'];
if (permissions.includes('admin')) {
  console.log('Admin access');
} else {
  console.log('Limited access');
}

// Use case: Whitelist/blacklist
const allowed = ['jpg', 'png', 'gif'];
const file = 'image.jpg';
if (allowed.includes(file.split('.').pop())) {
  console.log('File type allowed');
}

