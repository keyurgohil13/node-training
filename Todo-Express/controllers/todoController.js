
const Todo = require("../models/todoModel");

// let todos = [];


const getTodo =async (req, res) => {
   try{

    const todos =await Todo.find();

    res.render('home',{
        todos,
        singleTodo:{
            id:'',
            task:''
        },
        isEdit : false
    })


   }catch(err){
    console.log("Error", err);
   }
}

const addTodo = async (req, res) => {
  const {todo} = req.body;

  try{
    const ntodo = new Todo({
        task: todo
    });

    await ntodo.save();
    console.log("Data Create....");
    res.redirect('/');

  }catch(err){
    console.log(err);
  }
}

const singleTodo = (req, res) => {

    let { id } = req.params;

    let result = todos.find((todo) => {
        return todo.id == id;
    })

    console.log(result);
    return res.render('home', {
        isEdit: true,
        singleTodo: result,
        todos
    })

}

const deleteTodo = (req,res)=>{
    let id = req.params.id;

    let result = todos.filter((todo)=>{
        return todo.id != id;
    })
    todos = result;
    console.log("Task Delete");
    return res.redirect('/');
}

module.exports = {
    getTodo, addTodo, singleTodo, deleteTodo
}
