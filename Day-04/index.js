    console.log("Hello World")
    let age = 20;
    console.log(age); // 20

    // String
    let Name = "Krish";
    console.log(Name); // Krish

    // Boolean
    let isStudent = true;
    console.log(isStudent); // true

    // Undefined (variable declared but no value)
    let x;
    console.log(x); // undefined

    // Null (intentional empty value)
    let y = null;
    console.log(y); // null

    let num = 10;
    let text = "Hello";
    let flag = false;

    console.log(typeof num);   // number
    console.log(typeof text);  // string
    console.log(typeof flag);  // boolean
    let str = "123";
    let convertedNum = Number(str);
    console.log(convertedNum); // 123
    console.log(typeof convertedNum); // number

    // Number to String
    let nums = 50;
    let convertedStr = String(nums);
    console.log(convertedStr); // "50"
    console.log(typeof convertedStr); // string

    let a = 10;
    let b = 5;

    // Arithmetic
    console.log(a + b); // 15
    console.log(a - b); // 5
    console.log(a * b); // 50
    console.log(a / b); // 2

    // Comparison
    console.log(a > b);  // true
    console.log(a < b);  // false
    console.log(a == "10"); // true (loose equality)
    console.log(a === "10"); // false (strict equality)

    let marks = 75;

    // Check pass/fail
    if (marks >= 40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

    // Array = collection of values
    let numbers = [10, 20, 30, 40];

    console.log(numbers[0]); // 10
    console.log(numbers.length); // 4

    // Add value
    numbers.push(50);
    console.log(numbers); // [10, 20, 30, 40, 50]
    // Object = key-value pair
    let student = {
        name: "Krish",
        age: 20,
        isStudent: true
    };

    console.log(student.name); // Krish
    console.log(student.age);  // 20
    // Print numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    // Function to add two numbers
    function add(a, b) {
        return a + b;
    }

    let result = add(5, 3);
    console.log(result); // 8

    // Create a variable with your name
    // Create a variable with your age
    // Print: "My name is ___ and I am ___ years old"

    let names = "Krish";
    let ages = 20;

    console.log("My name is " + names + " and I am " + ages + " years old");