// Task 1 💻
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.
const family = {
    mother: 'Ann',
    father: 'Bob',
}
delete family.father
console.log(family)

// Task 2 🖥
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ 
//и если есть вывести в консоль true

const animal = {
    cat: 'Murka',
    dog: 'Rex',
}
console.log('cat' in animal)

// Task 3 🖥
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(key)
}
for (let key in student) {
    console.log(student[key])
}
// Task 4 🖥
// Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red),
    console.log(colors['ru pum pu ru rum'].blue)


// Task 5 🖥
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}
function calcSalary(sal) {
    let salary = 0
    for (let key in sal) {
        salary = salary + sal[key]
    }
    return salary / Object.keys(sal).length
}
console.log(calcSalary(salaries))

// Task 6 🖥
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

const login = prompt('Enter login')
const password = prompt('Enter password')
const user = {
    log: login,
    pass: password,
}
const checkLogin = prompt('Confirm your login')
const checkPassword = prompt('Confirm your password')
if (login === checkLogin && password === checkPassword) {
    alert('Добро пожаловать')
} else {
    alert('Неверно введен логин/пароль')
}

// ADVANCED level
// Task 1 🖥
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2))

// Task 2 🖥
// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. 
//Если попробуем узнать имя мы получим ОШИБКУ. Задача придумать как обратиться к несуществующему обьекту и не получить ошибку 
//чтобы наша программа работала дальше.

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}
console.log(animals.cat?.name)
console.log(animals.bird?.name)
