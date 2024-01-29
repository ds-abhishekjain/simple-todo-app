const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:eS3kgx7Y9j7jRNrC@jsprojects.kzmeu5h.mongodb.net/todos-app');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const mongo_todo_schema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todoModel = mongoose.model('todoModel',mongo_todo_schema)

 module.exports = {
  todoModel
 }