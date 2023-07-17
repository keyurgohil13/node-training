let todos = [];

const getTodo = (req, res) => {
    res.render('home', {
        todos,
        isEdit: false,
        singleTodo: {
            id: '',
            task: ''
        }
    });
}

const addTodo = (req, res) => {
    let { id } = req.body;
    if (id) {

        const { editTodo } = req.body;

        todos.filter((todo) => {
            if (todo.id == id) {
                todo.task = editTodo;
            }
        })

        return res.redirect('/')

    }
    else {
        let id = todos.length + 101;

        let { todo } = req.body;

        let nTodo = {
            id: id,
            task: todo
        }

        todos.push(nTodo);
        return res.redirect('/');
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
