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
