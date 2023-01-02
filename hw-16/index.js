// Task 1 💻

// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.

// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await

const posts = [15, 23, 7, 3]


const getPosts = (id) => {
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(data => data.json())
      .then(data => console.log(data))
}
const getData = (data) => {
   data.forEach(id => {
      getPosts(id)
   });
}

getData(posts)

const postsTwo = [1, 16, 25, 13]

const GetPostsTwo = async (id) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await response.json()
   console.log(data)
}

const getDataTwo = (data) => {
   data.forEach(id => {
      GetPostsTwo(id)
   })
}
getDataTwo(postsTwo)