// Task 1
/* Створіть масив styles з елементами 'jazz' і 'blues'
Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

Напишіть функцію logItems(array), яка приймає масив як аргумент
і виводить у консоль кожен його елемент у форматі:
"<номер елемента> - <значення елемента>".
Використайте цикл for для перебору елементів масиву.
Нумерація елементів повинна починатися з 1 (а не з 0). */

// let styles = ["jazz", "blues"];
// styles.push("rock-n-roll");

// for (let i = 0; i < styles.length; i++) {
//   if (styles[i] === "blues") {
//     styles[i] = "classic";
//     break;
//   }
// }
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`  ${i} - ${array[i]}`);
//   }
// }
// logItems(styles);

// Task 2
/* Напишіть функцію checkLogin(array), яка:
Приймає масив логінів як аргумент.
Запитує ім'я користувача через prompt.
Перевіряє, чи є введене ім'я у переданому масиві.
Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
Якщо ім'я відсутнє – виводить повідомлення: "User not found". */

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//   let nameUser = prompt("ім'я користувача? : ");
//   if (array.includes(nameUser)) {
//     alert(`Welcome, ${nameUser}!`);
//   } else {
//     alert("User not found");
//   }
// }
// checkLogin(logins);

// Task 3
/* Напишіть функцію caclculateAverage(),
яка приймає довільну кількість
аргументів і повертає їхнє середнє значення.
Додайте перевірку, що аргументи - це числа. */

function calculateAverage() {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number" && !isNaN(arguments[i])) {
      sum += arguments[i];
      count++;
    } else {
      console.error(`Ошибка: Аргумент ${arguments[i]} не является числом.`);
      return NaN;
    }
  }
  if (count > 0) {
    return sum / count;
  } else {
    console.error(
      "Ошибка: Нет числовых аргументов для вычисления среднего значения."
    );
    return NaN;
  }
}
console.log(calculateAverage(2, 4, 6));
console.log(calculateAverage(10, 5, 8, 12));
console.log(calculateAverage(1, "2", 3));

// Task 4
/* Напишіть функцію, яка сумуватиме сусідні числа
і пушитиме їх в новий масив.
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
уточнення: складати необхідно перше число з другим, потім друге - з третім,
третє - з четвертим і так до кінця.
В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29]. */

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumTotal(array) {
//   let res = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     let sumNum = array[i] + array[i + 1];
//     res.push(sumNum);
//   }
//   return res;
// }
// Task 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// Task 6
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// Task 7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
//   const add = user.mood = "happy";
//   console.log(user['name']);

// Task 8
/* Є об'єкт, в якому зберігаються зарплати команди
Напишіть код для додавання усіх зарплат та
збережіть його результат в змінній sum.
Якщо об'єкт salaries пустий, то результат має бути 0 */

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// if (Object.values(salaries) !== 0) {
//   for (let key in salaries) {
//     sum = sum + salaries[key];
//   }
// } else {
//   sum = 0;
// }
// console.log(sum);

// Task 9
/* Створіть об'єкт calculator з наступними методами:
read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist(). 
Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
методи sum і mult мають повертати рядок 'No such propeties'  */
const calculator = {
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  exist() {
    return this.hasOwnProperty("num1") && this.hasOwnProperty("num2");
  },
  sum() {
    if (this.exist()) {
      return this.num1 + this.num2;
    } else {
      return "No such propeties";
    }
  },
  mult() {
    if (this.exist()) {
      return this.num1 * this.num2;
    } else {
      return "No such propeties";
    }
  },
};
calculator.read(5, 7);
console.log(calculator.sum());
console.log(calculator.mult());

// Task 10
/* Напишіть функцію calcTotalPrice(fruits, fruitName),
яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
Функція рахує і повертає загальну вартість фрукта
з таким ім'ям, ціною та кількістю з об'єкта.

Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
назвою фрукта, це також треба урахувати. */

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];
function calcTotalPrice(fruits, fruitName) {
  let vartist = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].name === fruitName) {
      vartist = fruits[i].price * fruits[i].quantity;
    }
  }
  return vartist;
}
console.log(calcTotalPrice(fruits, "Яблуко"));
console.log(calcTotalPrice(fruits, "Апельсин"));
console.log(calcTotalPrice(fruits, "Банан"));
console.log(calcTotalPrice(fruits, "Груша"));
console.log(calcTotalPrice(fruits, "Виноград"));
console.log(calcTotalPrice(fruits, "Банан"));
