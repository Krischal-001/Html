// // const numbers = [1, 2, 3, 4, 5, 6];

// // const getEvenNumbers = (arr) => {
// //   const result = [];

// //   for (let num of arr) {
// //     if (num % 2 === 0) {
// //       result.push(num);
// //     }
// //   }

// //   return result;
// // };

// // console.log(getEvenNumbers(numbers)); 
// const students = [
//   { name: "Aarav", marks: 85, age: 20 },
//   { name: "Sita", marks: 72, age: 19 },
//   { name: "Ram", marks: 90, age: 21 },
//   { name: "Gita", marks: 60, age: 18 }
// ];

// const listStudents = (arr) => {
//   for (let student of arr) {
//     console.log(student.name, student.marks, student.age);
//   }
// };

// listStudents(students); \
const students = [
  { name: "Aarav", marks: 85, age: 20 },
  { name: "Sita", marks: 72, age: 19 },
  { name: "Ram", marks: 90, age: 21 },
  { name: "Gita", marks: 60, age: 18 }
];

// 1. FIND → first student with marks > 80
const topStudent = students.find(s => s.marks > 80);
console.log("Top student:", topStudent);

// 2. FILTER → students who passed (marks >= 70)
const passed = students.filter(s => s.marks >= 70);
console.log("Passed students:", passed);

// 3. MAP → get only names
const names = students.map(s => s.name);
console.log("Names:", names);

// 4. MAP → add grade based on marks
const gradedStudents = students.map(s => {
  let grade;

  if (s.marks >= 80) grade = "A";
  else if (s.marks >= 70) grade = "B";
  else grade = "C";

  return { ...s, grade };
});
console.log("With grades:", gradedStudents);

// 5. REDUCE → total marks
const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
console.log("Total marks:", totalMarks);

// 6. LOOP + CONDITION → print failing students
const printFailing = (arr) => {
  for (let s of arr) {
    if (s.marks < 70) {
      console.log("Fail:", s.name);
    }
  }
};
printFailing(students);