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

var user = new usermodel({
    username:'admin',
    password:'admin',
    lastsignintime: new Date()
})
var docs1 = [todolist_1,todolist_2];
var docs2 = [user];
usermodel.collection.insert(docs2,function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
})