const express = require('express')
const router = express.Router()

const todos = [
    {id: 1, name: 'clean up', status: 'open'},
    {id: 2, name: 'cook', status: 'done'}
]  

router.get('/', (req, res) => res.send("Welcome to todos"))

router.get('/todos', (req, res) => {
    return res.json(todos)
})

router.get('/todos/:id', (req, res) => {
    const todo = todos.find(item => item.id === parseInt(req.params.id))
    return res.json(todo)
})

module.exports = router