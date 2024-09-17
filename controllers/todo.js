const Todos = require('../models/todo')

const GetTodos = async (req, res) => {
    try {
        const todos = await Todos.find()
        if (todos)
            res.status(200).json(todos)
        else
            res.status(404).json({ message: 'No Todos found!' })
    }
    catch (error) {
        res.status(500).json({ message: "Some error occurred!" })
    }
}

const AddTodo = async (req, res) => {
    const { value } = req.body

    if (!value) {
        res.status(400).json({ message: "All fields are required..." })
        return
    }
    try {
        const result = await Todos.create({
            value
        })
        // res.status(201).json({ message: "Todo Inserted!" })
        res.status(201).json(result)
    }
    catch (error) {
        // console.log(error.message)
        res.status(500).json({ message: "Some error occurred!" })
    }
}

const UpdateTodo = async (req, res) => {
    const { id } = req.params
    const { value } = req.body

    if (!id) {
        res.status(400).json({ message: "Invalid Id" })
        return
    }

    if (!value) {
        res.status(400).json({ message: "Field is required..." })
        return
    }

    try {
        const result = await Todos.findByIdAndUpdate(id, { value },{new:true})

        if (result)
            res.status(201).json(result)
        else
            res.status(404).json({ message: "Invalid Id" })

    } catch (error) {
        // console.log(error.message)
        res.status(500).json({ message: "Invalid Id" })
    }
}

const DeleteTodo = async (req, res) => {

    const { id } = req.params

    if (!id) {
        res.status(400).json({ message: "Invalid Id" })
        return
    }

    try {
        const result = await Todos.findByIdAndDelete(id)
        // console.log('result', result)

        if (result)
            res.status(200).json({ message: "Todo deleted!" })
        else
            res.status(404).json({ message: "Invalid Id" })
    }
    catch (err) {
        // console.log('err', err.message)
        res.status(500).json({ message: "Invalid Id" })
    }
}

const GetTodoById = async (req, res) => {

    const { id } = req.params

    if (!id) {
        res.status(400).json({ message: "Invalid Id" })
        return
    }

    try {
        const result = await Todos.findById(id)
        // console.log('result', result)

        if (result)
            res.status(200).json(result)
        else
            res.status(404).json({ message: "Invalid Id" })
    }
    catch (err) {
        // console.log('err', err.message)
        res.status(500).json({ message: "Invalid Id" })
    }
}

module.exports = {
    GetTodos,
    AddTodo,
    UpdateTodo,
    DeleteTodo,
    GetTodoById
}