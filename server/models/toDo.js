const  mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const toDo = new mongoose.model("todos", toDoSchema);
module.exports = {toDo}