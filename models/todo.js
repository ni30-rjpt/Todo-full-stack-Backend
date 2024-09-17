const mongoose=require('mongoose')
const TodoSchema=mongoose.Schema({
    value:{
        type:String,
        required:true
    }
})

const TodoModel=mongoose.model('todo',TodoSchema)
module.exports=TodoModel