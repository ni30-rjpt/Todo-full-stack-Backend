const express = require('express')
const { GetTodos, AddTodo, DeleteTodo, UpdateTodo, GetTodoById } = require('../controllers/todo')
const router = express.Router()

router.get('/', GetTodos)
router.post('/add', AddTodo)
router.route('/:id').get(GetTodoById).patch(UpdateTodo).delete(DeleteTodo)

module.exports = router