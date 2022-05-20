import {addTask}from './addTask.js';
import {ShowAllTasks}from './showAllTasks.js';
import {DeleteTask}from './DeleteTask.js';
import {EditTask}from './EditTask.js';
let button = document.querySelector('#OK');
let tasks = [];
let task = {
    text:'have lunch',
    isDone:false,
};
let text = {
    text:'done homework',
    isDone:false
};
let toxt = {
    text:'have breakfast',
    isDone:true
};
tasks = addTask (tasks , text);
tasks = addTask (tasks , toxt);
tasks = addTask (tasks , task);
tasks = addTask (tasks , task);
ShowAllTasks (tasks);
button.addEventListener('click',function(){
    let taskText = document.querySelector('input[placeholder="add task"]').value;
    console.log (taskText);
    tasks = addTask (tasks , {text: taskText , isDone: false} );
    console.log (tasks);
    ShowAllTasks(tasks);
    document.querySelector('input[placeholder="add task"]').value = '';
});
