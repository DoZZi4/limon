import {addTask}from "./addTask.js";
import {ShowAllTasks}from "./showAllTasks.js";
import {DeleteTask}from "./DeleteTask.js";
let tasks = [];
let task = {
    text:"have lunch",
    isDone:false,
}
tasks = addTask (tasks , task);
tasks = addTask (tasks , task);
ShowAllTasks (tasks)
DeleteTask (tasks , 0)
ShowAllTasks (tasks)