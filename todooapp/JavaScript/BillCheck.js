function BillsCheck (task){
    let tasks = window.localStorage.getItem('Bills');
    if (tasks===null){
        tasks= [task];
        let tasksStr = JSON.stringify(tasks);
    window.localStorage.setItem('Bills', tasksStr);

    }
}
BillsCheck ({
    text:'sell car',
    price:300
});
window.localStorage.getItem('Bills');
console.log(window.localStorage.getItem('Bills'));