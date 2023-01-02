// Task 1 💻

// Создайте класс **`Developer`**

// + Конструктор этого класса принимает один параметр `name`
// + Реализуйте метод  **`startWork`**  который возвращает строку:
//   >  `name` start work ...
// + Реализуйте метод  **`endtWork`**  который возвращает строку:
//   >  `name` end work ...
// Далее реализуйте два класса **`Frontend`** **`Backend`** которые будут наследовать методы из класса **`Developer`**

// + Класс **`Frontend`** должен иметь свой уникальный метод `buildWebSite` который возвращает строку:
//   >  `name` start build website
// + Класс **`Frontend`** должен иметь свой уникальный ключ `websiteName` в который мы записываем название веб-сайта над которым будет работать разработчик.
// + Класс **`Backend`** должен иметь свой уникальный метод `buildServer` который возвращает строку:
//   >  `name` start build server
// Проинициализируйте два класса **`Frontend`** **`Backend`** и вызовите у них все доступные методы.

// ```javascript
//     const john = new Frontend('john');
//     john.startWork()        // john start work ...
//     john.buildWebsite()     // john start build website Amazon
//     john.endWork()          // john end work ...

class Developer {
   constructor(name) {
      this.name = name
   }

   startWork() {
      return `${this.name} start work ...`
   }

   endWork() {
      return `${this.name} end work ...`
   }
}

class Frontend extends Developer {
   constructor(name, websiteName) {
      super(name)
      this.websiteName = websiteName
   }

   buildWebSite() {
      return `${this.name} start build website ${this.websiteName}`
   }
}

class Backend extends Developer {
   buildServer() {
      return `${this.name} start build server`
   }
}

const a = new Frontend("Ольга", "EPAM")

console.log(a.startWork())
console.log(a.buildWebSite())
console.log(a.endWork())

const b = new Backend("Миша")

console.log(b.startWork())
console.log(b.buildServer())
console.log(b.endWork())