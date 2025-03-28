const getUserNames = users => users.map(user => user.name);

console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]



/*
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "green", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find((option) => option.label === "green"));
 // { label: "blue", color: "#2196F3" }
*/

/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap(book => book.genres);
console.log(genres);
*/

/*
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);
*/

/*
changeEven = (numbers, value) => {
  let newArray = [];

  numbers.forEach(num => num % 2 === 0 ? newArray.push(num + value) : newArray.push(num));
  return newArray;
  
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
*/

/* use forEach, arrow func and ternar */
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