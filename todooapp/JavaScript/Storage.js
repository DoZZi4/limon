
function AddStorageTasks (task){
    let tasks = window.localStorage.getItem('tasks');
    if (tasks===null){
        tasks= [task];
        let tasksStr = JSON.stringify(tasks);
        window.localStorage.setItem('tasks', tasksStr);

    }else {
        let parsedTasks=JSON.parse(tasks);
        parsedTasks.push(task);
        console.log(parsedTasks);
        window.localStorage.setItem('tasks',JSON.stringify(parsedTasks) );
    }
}




function DeleteStorageTask (index){
    let tasks = JSON.parse(window.localStorage.getItem('tasks'));
    let TaskCopy = [];
    for (let i = 0 ;i<tasks.length;i++ ){
        if (i!== index){
            TaskCopy.push (tasks[i]);
        
        }
    }
    window.localStorage.setItem('tasks', JSON.stringify(TaskCopy));
}


function MarkTask (index){
    let tasks = JSON.parse(window.localStorage.getItem('tasks'));
    tasks[index].isDone=!tasks[index].isDone;
    window.localStorage.setItem('tasks',JSON.stringify(tasks));

}







window.localStorage.getItem('tasks');
console.log(window.localStorage.getItem('tasks'));
export {AddStorageTasks,DeleteStorageTask,MarkTask};
