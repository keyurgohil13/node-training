
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

const singleTodo = async(req, res) => {

    let { id } = req.params;

    try{

        const singleItem = await Todo.findById(id);
        const todos =await Todo.find();

        if(singleItem != null){
            res.render('home', {
                singleTodo : singleItem,
                isEdit : true,
                todos
            })
        }

    }catch(err){
        console.log("Error", err);
    }

}

const editTodo = async (req, res) =>{

    try{
        let {id, editTodo} = req.body;

        const updateTodo =await Todo.findByIdAndUpdate(id, {task : editTodo});
        res.redirect('/');
    }
    catch(err){
        console.log("Edit Todo ", err);
    }

}

const deleteTodo =async  (req,res)=>{
    let {id} = req.params;

    try{
        let result = await Todo.findByIdAndDelete(id);
        console.log("Deleted....");
       return res.redirect('/');
    }
    catch(err){
        console.log("Delete ", err);
    }
}

module.exports = {
    getTodo, addTodo, singleTodo, deleteTodo, editTodo
}
