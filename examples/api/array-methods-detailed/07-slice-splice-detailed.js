// ============================================
// Array.prototype.slice & splice - Detailed Examples
// ============================================

// ========== SLICE ==========
// Returns NEW array (non-mutating)

// Basic usage: Extract portion of array
const numbers = [1, 2, 3, 4, 5];
const firstThree = numbers.slice(0, 3);
console.log(firstThree); // [1, 2, 3]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

// Negative indices: Count from end
const lastTwo = numbers.slice(-2);
console.log(lastTwo); // [4, 5]

// Omit end index: Extract to end
const fromIndex2 = numbers.slice(2);
console.log(fromIndex2); // [3, 4, 5]

// Shallow copy entire array
const copy = numbers.slice();
console.log(copy); // [1, 2, 3, 4, 5]
copy[0] = 999;
console.log(numbers[0]); // 1 (original unchanged)

// Convert array-like to array
const nodeList = document.querySelectorAll('div');
const array = Array.prototype.slice.call(nodeList);
// Or: const array = [...nodeList];

// ========== SPLICE ==========
// Mutates original array (removes/replaces elements)

// Basic usage: Remove elements
const arr1 = [1, 2, 3, 4, 5];
const removed = arr1.splice(1, 2); // Remove 2 elements starting at index 1
console.log(removed); // [2, 3]
console.log(arr1); // [1, 4, 5] (mutated)

// Insert elements (remove 0 elements)
const arr2 = [1, 2, 3];
arr2.splice(1, 0, 'a', 'b'); // Insert at index 1
console.log(arr2); // [1, 'a', 'b', 2, 3]

// Replace elements
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2, 'x', 'y'); // Replace 2 elements starting at index 2
console.log(arr3); // [1, 2, 'x', 'y', 5]

// Remove from end
const arr4 = [1, 2, 3, 4, 5];
arr4.splice(-2); // Remove last 2 elements
console.log(arr4); // [1, 2, 3]

// Remove all elements from index
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(2); // Remove all from index 2
console.log(arr5); // [1, 2]

// Comparison: slice vs splice
const original1 = [1, 2, 3, 4, 5];
const sliced = original1.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(original1); // [1, 2, 3, 4, 5] (unchanged)

const original2 = [1, 2, 3, 4, 5];
const spliced = original2.splice(1, 3);
console.log(spliced); // [2, 3, 4]
console.log(original2); // [1, 5] (mutated)

// Use case: Remove item by value
function removeItem(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
const arr6 = [1, 2, 3, 4, 5];
removeItem(arr6, 3);
console.log(arr6); // [1, 2, 4, 5]

// Use case: Insert at specific position
function insertAt(arr, index, ...items) {
  arr.splice(index, 0, ...items);
  return arr;
}
const arr7 = [1, 2, 3];
insertAt(arr7, 1, 'a', 'b');
console.log(arr7); // [1, 'a', 'b', 2, 3]

// Edge case: Negative start index
const arr8 = [1, 2, 3, 4, 5];
arr8.splice(-2, 1); // Remove 1 element starting 2 from end
console.log(arr8); // [1, 2, 3, 5]

// Performance: slice is faster for copying (non-mutating)
// Use slice when you need a copy, splice when you need to modify

