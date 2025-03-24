changeEven = (numbers, value) => {
  let newArray = [];

  numbers.forEach(num => num % 2 === 0 ? newArray.push(num + value) : newArray.push(num));
  return newArray;
  
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

/* use arrow func and ternar */
/*
filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => (number > value) ? filteredNumbers.push(number) : undefined);
    return filteredNumbers;
}

console.log(filterArray([2, 3, 4, 5, 6, 7], 3));
*/

/* shorter function by arrow func */
/*
calculateTotalPrice = orderedItems => {
  let totalPrice = 0;
  orderedItems.forEach(item => totalPrice += item );
  return totalPrice;
}

console.log(calculateTotalPrice([2, 5, 3]));
*/

/*
function filterArray(numbers, value) {

    let resultArray1 = [];

  numbers.forEach(function(num, i, resultArray){
    if (num > value) {
        resultArray1.push(num);
    }
  });
    
    return resultArray1;
}

console.log(
    filterArray([2, 3, 4, 5, 6, 7], 4)
);
*/

/*
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach   
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

*/