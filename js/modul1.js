// * Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);




//! ===================================

//* Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students += 70;
// console.log(students);




//! ===================================

//* Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// 108 + 223 - 10
// 331 - 10
// 321




//! ===================================

//* Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.1;

// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))





//! ===================================

//* Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"





//! ===================================

//* Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// weight = Number(weight.replace(",", "."))
// height = Number(height.replace(",", "."))

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi);





//! ===================================

//* Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log("2" > "12"); // true - Unicode table

// console.log("0".charCodeAt(0));
// console.log("2".charCodeAt(0));

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6); // false

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); // 0 == 0 -> true

/*
    false: 0, "", null, undefind
    true: будь-яке число, крім 0, будь-яка строка, яка не є пустою
*/

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true

// console.log('Papaya' === 'papaya'); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false





//! ===================================

// * Example 8 - Логічні оператори
// Яким буде результат виразів?

// && - повертає перший false, якщо не знаходить, повертає останній елемент
// || - повертає перший true, якщо не знаходить, повертає останній елемент
// ! - змінює логічний тип на зворотній(false на true і навпаки)

// console.log(true && 3); //3

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //kiwi

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); //true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0);
// 1. -> null
// 2. null > 0
// 3. Number(null) -> 0
// 4. 0 > 0 -> false


// null > 0 -> 0 > 0 -> false

// console.log(null || (2 && 3) || 4); // 3

// 1. (2 && 3) -> 3
// 2. null || 3 || 4 -> 3

// 2 && 3 -> 3
// null || 3 || 4 -> 3









//! =================================== MODUL 1 lesson 2 

//* Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, 
// який питатиме: "Яка офіційна назва JavaScript?".Якщо користувач вводить ECMAScript,
//     то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userAnswer = prompt("Яка офіційна назва JavaScript?");
// if (userAnswer === "ECMAScript") {
//     alert("Правильно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }






//! ==========================================

//* Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 0;
// let timeStr = "";

// if (minutes === 0) timeStr = `${hours} г.`;
// else timeStr = `${hours} г. ${minutes} хв.`;

// console.log(timeStr);





//! ==========================================
//* Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль 
// максимальне з них.В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 180;

// if (a >= 100 && b > 100) {
//     console.log('E')
// }





//! ==========================================
// * Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0: {
//     console.log("Сьогодні");
//     break;
//   }
//   case 1: {
//     console.log("Завтра");
//     break;
//   }
//   case 2: {
//     console.log("Післязавтра");
//     break;
//   }
//   default: {
//     console.log("Дата у майбутньому");
//   }
// }

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }



//* Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) continue;
//   console.log(i);
// }

// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   total += i;
// }

// console.log(total);

/*
1. 
for (let i = 20; i <= 100; i += 1) { // i = 20, total = 0
  total += i; // total = 20
}
2. 
for (let i = 20; i <= 100; i += 1) { // i = 21, total = 20
  total += i; // total = 41 -> 20 + 21
}
2. 
for (let i = 20; i <= 100; i += 1) { // i = 22, total = 41
  total += i; // total = 63 -> 22 + 41
}
*/

// for (let i = max; i >= min; i -= 1) {
//   if (i % 5 === 0) console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

// for(let i = min; i <= max; i += 5) {
//     console.log(i)
// }

// for(let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }

/*
1. 
for(let i = 0; 0 < 10; i += 1) {
    console.log(0)
}
2. 
for(; 1 < 10; i += 1) {
    console.log(1)
}
3. 
for(; 2 < 10; i += 1) {
    console.log(2)
}
9. 
for(; 9 < 10; i += 1) {
    console.log(9)
}
10. 
for(; 10 < 10; i += 1) {
   --------
}
*/