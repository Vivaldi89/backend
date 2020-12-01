const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');
const deleteOne = require('../controllers/todoControllers/deleteOne');
const markAsChecked = require('../controllers/todoControllers/markAsChecked');
const add = require('../controllers/todoControllers/add');
const delCompleted = require('../controllers/todoControllers/delCompleted');
const todos = require('../controllers/todoControllers/todos');
const checkAll = require('../controllers/todoControllers/checkAll');
const uncheckAll = require('../controllers/todoControllers/uncheckAll');

router.delete('/del/:id', tokenCheck, deleteOne.deleteOne);
router.put('/update/:id/:check', tokenCheck, markAsChecked.markAsChecked);
router.post('/add', tokenCheck, add.add);
router.delete('/delcompleted', tokenCheck, delCompleted.delCompleted);
router.get('/todos', tokenCheck, todos.todos);
router.put('/uncheckall', tokenCheck, uncheckAll.uncheckAll);
router.put('/checkall', tokenCheck, checkAll.checkAll);

module.exports = router;

