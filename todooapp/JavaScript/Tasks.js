import {addTask}from "./addTask.js";
import {ShowAllTasks}from "./showAllTasks.js";
import {DeleteTask}from "./DeleteTask.js";
import {EditTask}from "./EditTask.js";
let tasks = [];
let task = {
    text:"have lunch",
    isDone:false,
}
let text = {
    text:"done homework",
    isDone:false
}
let toxt = {
    text:"have breakfast",
    isDone:true
}
tasks = addTask (tasks , text)
tasks = addTask (tasks , toxt)
tasks = addTask (tasks , task);
tasks = addTask (tasks , task);
ShowAllTasks (tasks)
tasks = DeleteTask (tasks , 0)
ShowAllTasks (tasks)
tasks = DeleteTask (tasks , 1)
ShowAllTasks(tasks)
let text1 = {
    text:"have lunch",
    isDone:true
}
tasks = EditTask (tasks , text1  , 1)
ShowAllTasks (tasks)