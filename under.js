const todos = [
    {id: 1, name: 'clean up', status: 'open'},
    {id: 2, name: 'cook', status: 'done'}
  ]

const todo = todos.find(item => item.id === parseInt("1"))
console.log(todo)