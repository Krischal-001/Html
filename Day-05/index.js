// AND (&&) with numbers & strings
console.log(1 && 2);        // 2
console.log(0 && 2);        // 0
console.log("hi" && "ok");  // "ok"
console.log("" && "ok");    // ""

// OR (||) with numbers & strings
console.log(1 || 2);        // 1
console.log(0 || 2);        // 2
console.log("hi" || "ok");  // "hi"
console.log("" || "ok");    // "ok"

// NOT (!) with numbers & strings
console.log(!1);        // false
console.log(!0);        // true
console.log(!"hi");     // false
console.log(!"");       // true

// Double NOT (!!) (convert to boolean)
console.log(!!1);        // true
console.log(!!0);        // false
console.log(!!"hi");     // true
console.log(!!"");       // false

// XOR (using !==)
console.log(1 !== 2);        // true
console.log(1 !== 1);        // false
console.log("a" !== "b");    // true
console.log("a" !== "a");    // false

// AND short-circuit behavior
console.log(0 && "run");     // 0
console.log(1 && "run");     // "run"

// OR short-circuit behavior
console.log(0 || "run");     // "run"
console.log(1 || "run");     // 1


const user ="sa"&&"Guest";
console.log(user)
const userrr = {
  name: "hello",
  age: 56
};

console.log(userrr.name);        // "hello"
console.log(userrr?.name);       // "hello"
console.log(userrr?.address);    // undefined
console.log(userrr.address);     // undefined
// Arrow function in array methods
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]