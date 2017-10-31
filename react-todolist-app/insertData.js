var todolistmodel = require('./models/todolistmodel');
var usermodel = require('./models/usermodel');

var todolist_1 = new todolistmodel({
    id : 'admin-1',
    owns: 'admin',
    context: '吃饭睡觉搬砖',
    importance: false,
    editedtime: new Date(),
    completed: false,
    deadline: new Date() 
});

var todolist_2 = new todolistmodel({
    id : 'admin-2',
    owns: 'admin',
    context: '吃饭睡觉打游戏',
    importance: true,
    editedtime: new Date(),
    completed: true,
    deadline: new Date() 
});

var visitorTodolist = new todolistmodel({
    id : 'visitor-1',
    owns: 'visitor',
    context: '啊啊啊啊',
    importance: true,
    editedtime: new Date(),
    completed: true,
    deadline: new Date() 
});

var visitor = new usermodel({
    username:'visitor',
    password:'visitor'
})

var user = new usermodel({
    username:'admin',
    password:'admin',
    lastsignintime: new Date()
})
var docs1 = [todolist_1,todolist_2];
var docs2 = [user];
usermodel.collection.insert([visitor],function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
})