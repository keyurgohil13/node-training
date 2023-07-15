const express = require("express");
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

let todos = [];
app.get('/', (req, res) => {
    // res.send("<h1>Helloo , Good Afternoon,,...</h1>");

    res.render('home',{
        todos,
        isEdit : false,
        singleTodo : {
            id:'',
            task: ''
        }
    });

})


app.post('/add', (req, res) =>{

    let {id} = req.body;
    if(id){

        const {editTodo} = req.body;

        todos.filter((todo) =>{
            if(todo.id == id){
                todo.task = editTodo;
            }
        })

        return res.redirect('/')

    }
    else{
        let id = todos.length + 101;
    
        let {todo} = req.body;
        
        let nTodo = {
            id : id,
            task : todo
        }
    
        todos.push(nTodo);
        return res.redirect('/');
    }
    
})

app.get('/edit/:id', (req, res) =>{

   let {id} = req.params;
   
   let result = todos.find((todo) =>{
        return todo.id == id;
   })

   console.log(result);
   return res.render('home', {
        isEdit : true,
        singleTodo: result,
        todos
   })

})

app.get('/delete/:id',(req,res)=>{
    let id = req.params.id;

    let result = todos.filter((todo)=>{
        return todo.id != id;
    })
    todos = result;
    console.log("Task Delete");
    return res.redirect('/');
})

app.get('/about', (req, res) =>{

    res.send("Welcome to about")
})


app.listen(8000, () =>{
    console.log("Server run proper...on 8000 port.");
})

