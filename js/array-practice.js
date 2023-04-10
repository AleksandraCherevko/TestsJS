// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// friends[1] = 'jhsuwhushqu';
// friends[0] = 'dhwjhduwhduhq';
// console.table(friends);


// обращение к последнему массиву
// const lastIndex = friends.length - 1;
// console.log(lastIndex);


// передача по значению

// let a = 10;
// let b = 10;

// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);




//  Ссылочное равенство (referential equality)
//  */
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]); 

// =====================================================

// const cart = [51, 18, 13, 24, 7, 85, 19];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1){
//   console.log(cart[i]);
//   total += cart[i];
// }

// console.log(total)

// =====================================================
// подсчитать сумму всех четных чисел

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1){
//   console.log(numbers[i]);
//   if (numbers[i] % 2 === 0) {
//     console.log('четное!');
//     total += numbers[i];
//   } 
//   }

// console.log('Total', 'total');



// // =====================================================
// Напиши скрипт поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = "Пользователь ${loginToFind} найден.";
//     break;
//   }
//   else 
//      message = "Пользователь ${loginToFind} не найден.";
  
// }
  
// console.log(message);


// // =====================================================
/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);



// * Напиши скрипт поиска самого большого числа в массиве,
//  * при условии что числа уникальные (не повторяются).
//  * /

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];
// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log("biggestNumber:", biggestNumber);



/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// console.log(friends);
// console.log(string);




// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// const string = friends.join(',');
// console.log(string);


// // =====================================================

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     console.log('Эта буква в нижнем регистре')
//     invertedString += letter.toLocaleUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }

// console.log(invertedString);




// // =====================================================
// Створіть масив genres з елементами «Jazz» та «Blues».
//1. Додайте «Рок-н-рол» до кінця.
//2. Виведіть у консоль перший елемент масиву.
//3. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
//4. Видаліть перший елемент та виведіть його в консоль.
//5. Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];

// genres.push("Рок-н-рол");
// console.log(genres);


// console.log(genres[0]);

// console.log(genres[genres.length - 1]);



//! ================================================

//* Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = "8 3";
// const valuesArray = values.split(" ");
// const a = Number(valuesArray[0]);
// const b = Number(valuesArray[1]);
// const square = a * b;
// console.log(square);


//* Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }



//! ================================================

//* Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = "Welcome to the future"; // to the
/*
1. переводимо рядок у масив з розділенням " "
2. видалити перший елемент масиву і останній
3. перевести масив назад до строки з розділенням " "
*/

// const strArray = string.split(" ");
// strArray.shift();
// strArray.pop();
// const newString = strArray.join(" ");

// console.log(newString);


//! ================================================

//* Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = "Welcome to the future";
// const reversedStr = string.split("").reverse().join("");
// console.log(reversedStr);


// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruits.length);


//! ================================================

// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);

//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));


//! ================================================

// function calculateEngravingPrice(message, pricePerWord) {

//     let messageArray = message.split(" ");
//     let sum = messageArray.length * pricePerWord;

//     console.log("${message} ${sum}");
//     return sum;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));


//! ================================================
// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);

//   return string;
// }

// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );



//! ================================================

// const fruits = ["apple", "plum", "pear", "orange", "banana"];


// const firstTwoEls = fruits.slice(0, 2);

// const nonExtremeEls = fruits.slice(1, 4);

// const lastThreeEls = fruits.slice(-3);

class User {
    email;



  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line
constructor ({email, accessLevel}){
super(email);
this.accessLevel = accessLevel;}

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"