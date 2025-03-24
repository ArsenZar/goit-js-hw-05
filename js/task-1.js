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