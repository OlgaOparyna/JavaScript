// Task 1 💻
// Создайте переменные и присвойте им значения:

const a = 'true'
const b = false
const c = 17
const d = undefined
const f = null

// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof f)

// Task 2 💻
// Даны две переменные. С помощью условий выведите в консоль разработчика наибольшее число.

let height = 15
let width = 20
if (height > width) { console.log(height) }
else { console.log(width) }


// Task 3 💻
// Написать перебор от 1 до 20, где выведутся все числа кратные трём. Для вычисления кратности обратите внимание на оператор %
for (let i = 0; i <= 20; i++) {
   if (i % 3 === 0) console.log(i)
}

// Task 4 💻
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, 
// но из еды нам надо яблоко или апельсин. Для решения этой задачи нам помогут логические операторы || &&.
// Ответ поместите в переменную shouldGoToWork

let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = key && documents && pen && (apple || orange)
console.log(shouldGoToWork)

// Task 5 💻
// Запросить у пользователя число:
// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

const num = prompt('Enter number')
if (num % 3 === 0 && num % 5 === 0) { console.log('FizBuz') }
else if (num % 3 === 0) { console.log('Buz') }
else if (num % 5 === 0) { console.log('Fiz') }

// Task 6 💻
// Написать программу, которая выполняет следующие операции:

// Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
// Если меньше, то выводит сообщение - Пей колу.
// Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.

const age = prompt('Enter your age')
if (age >= 16 && age < 18) { console.log('Можешь выкурить сигаретку, только маме не говори') }
else if (age >= 18) { console.log('Попей пивка') }
else if (age < 18) { console.log('Пей колу') }

//не поняла про дополнительное условие. нужно было дополнительно к "пей колу" добавить про сигаретку? тогда не знаю, как сделать

// Task 7 💻
// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. 
//После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
//Используйте конструкцию switch

const side = prompt('В какую сторону света Вы бы хотели отправиться?')
switch (side) {
   case 'юг': console.log('на юг пойдешь счастье найдешь'); break;
   case 'север': console.log('на север пойдешь много денег найдешь'); break;
   case 'запад': console.log('на запад пойдешь верного друга найдешь'); break;
   case 'восток': console.log('на восток пойдешь разработчиком станешь'); break;
   default: console.log('попробуйте еще раз')
}

// ADVANCED level
// Task 1 👨‍🏫
// Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert
// Привет, Полина Набережная!

const userName = 'пОлИнА нАбЕрЕжНаЯ'
const index = userName.indexOf(' ')
const firstName = userName.slice(0, index)
const lastName = userName.slice(index + 1)
const resFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
const resLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
const resUserName = resFirstName + ' ' + resLastName
alert(`Привет ${resUserName}!`)

// Task 2 👨‍🏫
// Написать программу, которая выполняет следующие операции:
// Запрашивает у пользователя число.
// Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// По окончании вывести пользователю alert, содержащий формулу и результат например:
// ((((6 - 10) + 5) * 20) / 2 = 110)

const userNum = prompt('Напишите любое число')
const userNum1 = prompt('Сколько отнять?')
const userNum2 = prompt('Сколько прибавить?')
const userNum3 = prompt('На сколько умножить?')
const userNum4 = prompt('На сколько разделить?')
const resUserNum = ((userNum - userNum1) + userNum2) * userNum3 / userNum4
alert(`Получился релультат ${resUserNum}!`)

// Task 3 👨‍🏫
// Написать программу, которая будет выводить в консоль лесенку. Не забудьте вопспользоваться циклами

//     #
//     ##
//     ###
//     ####
//     #####
//     ######

let numb = ""
while (numb.length < 6) {
   console.log(numb += '#')
}

