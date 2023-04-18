// Оператор return используется для передачи значения из тела функции во внешний код.Когда интерпретатор встречает return,
// он сразу же выходит из функции(прекращает её выполнение), и возвращает указанное значение в то место кода, где функция была вызвана.


// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); 

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550



// ====================================================================


// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1



// ====================================================================
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120


// ====================================================================
// function withdraw(amount, balance) {
//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//     return;
//   }

//   // Если условие первого if не выполнилось, его тело пропускается
//   // и интерпретатор доходит до второго if.
//   // Если условие выполняется, вызывается console.log и выход из функции.
//   // Код идущий после тела if  не выполнится.
//   if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log("Операция снятия средств проведена");
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"



// ====================================================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   console.log(total);
//   return total;
// }



// calculateTotalPrice([12, 85, 37, 4]);




// ====================================================================

// function findLongestWord(string) {
//   // Change code below this line
//   const stringSplit = string.split(" ");
//   let longestWord = " ";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
//   // Change code above this line
// }


// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



// ====================================================================

// function createArrayOfNumbers(min, max) {
//     const numbers = [];


//     for (let i = min; i <= max; i += 1) {
//        numbers.push(i);
//     }

//      return numbers;
// }


// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));


// ====================================================================


// function filterArray(numbers, value) {
//   // Change code below this line

//   const newArray = [];
//   for (i = 0; numbers.length > i; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));



// ====================================================================

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
// return fruits.includes(fruit);

//   return; 
// } 

// console.log(checkFruit("mandarin"));




// ====================================================================

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let num of numbers) {
//     if (num > value) {
//       filteredNumbers.push(num);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }



// console.log(filterArray([1, 2, 3, 4, 5], 3));


// ====================================================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   console.log(total);
//   return total;
// }


// calculateTotalPrice([412, 371, 94, 63, 176]);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

const entries = Object.entries(book);
console.log(entries);