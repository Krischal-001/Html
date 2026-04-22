const numbers = [1, 2, 3, 4, 5, 6];

const getEvenNumbers = (arr) => {
  const result = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
};

console.log(getEvenNumbers(numbers)); 