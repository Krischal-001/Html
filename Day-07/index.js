// ===============================
// STRING SLICING IN JAVASCRIPT
// ===============================

// We will use this sample string
const str = "Hello, JavaScript World!";

console.log("Original String:", str);

// -------------------------------------------------
// 1. slice(start, end)
// -------------------------------------------------
// Extracts a section of a string and returns a new string
// Does NOT modify the original string

console.log("\n--- slice() examples ---");

// Basic slicing
console.log(str.slice(0, 5));       // "Hello"

// From index to end
console.log(str.slice(7));          // "JavaScript World!"

// Negative indices (count from end)
console.log(str.slice(-6));         // "World!"
console.log(str.slice(-12, -7));    // "Script"

// If start > end → returns empty string
console.log(str.slice(5, 2));       // ""

// -------------------------------------------------
// 2. substring(start, end)
// -------------------------------------------------
// Similar to slice BUT:
// - Negative values are treated as 0
// - If start > end, it swaps them

console.log("\n--- substring() examples ---");

console.log(str.substring(0, 5));   // "Hello"

// Negative values become 0
console.log(str.substring(-5, 5));  // "Hello"

// Swaps start and end if start > end
console.log(str.substring(5, 0));   // "Hello"

// -------------------------------------------------
// 3. substr(start, length)  (DEPRECATED)
// -------------------------------------------------
// Not recommended for modern JS

console.log("\n--- substr() examples (deprecated) ---");

console.log(str.substr(0, 5));      // "Hello"
console.log(str.substr(7, 10));     // "JavaScript"

// Negative start allowed
console.log(str.substr(-6, 6));     // "World!"

// -------------------------------------------------
// 4. Practical Examples
// -------------------------------------------------

console.log("\n--- Practical Examples ---");

// Extract file extension
const file = "photo.jpg";
const extension = file.slice(file.lastIndexOf(".") + 1);
console.log("Extension:", extension); // "jpg"

// Get domain from email
const email = "user@example.com";
const domain = email.slice(email.indexOf("@") + 1);
console.log("Domain:", domain); // "example.com"

// First and last characters
console.log("First char:", str.slice(0, 1));  // "H"
console.log("Last char:", str.slice(-1));     // "!"

// Remove first and last character
console.log("Trimmed:", str.slice(1, -1));

// -------------------------------------------------
// 5. Loop through string using slice
// -------------------------------------------------

console.log("\n--- Loop with slice ---");

for (let i = 0; i < str.length; i++) {
  console.log(str.slice(i, i + 1)); // each character
}

// -------------------------------------------------
// 6. Copy entire string
// -------------------------------------------------

const copy = str.slice();
console.log("\nCopy:", copy);

// -------------------------------------------------
// 7. Important Notes
// -------------------------------------------------

/*
✔ slice() is the MOST commonly used
✔ substring() has quirks (avoid when possible)
✔ substr() is deprecated (avoid)

Summary:
- slice(start, end)
- supports negative indexes
- does NOT modify original string
*/

console.log("\n--- End of Demo ---");