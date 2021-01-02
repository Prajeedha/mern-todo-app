const mongoose=require('mongoose');
const todoSchema=mongoose.Schema({
    todo:String
})

module.exports=mongoose.model('todolist',todoSchema) //todolist is the name of the collection