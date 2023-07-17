const express = require("express");

const router = express.Router();

const {getTodo, addTodo, singleTodo, deleteTodo } = require('../controllers/todoController');


router.get('/', getTodo);

router.post('/add', addTodo);

router.get('/edit/:id', singleTodo);


router.get('/delete/:id',deleteTodo);


module.exports = router;