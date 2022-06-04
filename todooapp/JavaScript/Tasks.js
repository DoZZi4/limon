import {ShowAllTasks}from './showAllTasks.js';
import {DeleteTask}from './DeleteTask.js';
import {EditTask}from './EditTask.js';
import './Storage.js';
import './BillCheck.js';
import {AddStorageTasks}from './Storage.js';
let button = document.querySelector('#OK');
let tasks = [];
ShowAllTasks (tasks);
button.addEventListener('click',function(){
    let taskText = document.querySelector('input[placeholder="add task"]').value;
    console.log (taskText);
    tasks = AddStorageTasks ({text: taskText , isDone: false} );
    console.log (tasks);
    ShowAllTasks(tasks);
    document.querySelector('input[placeholder="add task"]').value = '';
});
