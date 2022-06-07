import { checkboxTemplate } from './templates.js';
import {EditTask} from './EditTask.js';
import {DeleteStorageTask,MarkTask} from './Storage.js';
function ShowAllTasks (){
    let list = JSON.parse(window.localStorage.getItem('tasks'));
    let tasks = document.querySelectorAll('.task');
    for (let i = 0;i <tasks.length;i++){
        tasks[i].remove();
    } 
    const Body = document.querySelector('.boddy');
    for (let i = 0;i<list.length;i++) {
        const div =document.createElement('div');
        div.innerHTML=checkboxTemplate;
        div.querySelector('.click').setAttribute('id' , `click${i}`);
        div.querySelector('.tesks').setAttribute('for', `click${i}`);
        if(list[i].isDone){
            div.querySelector('.click').setAttribute('checked',list[i].isDone);
        }
        div.querySelector('.tesks').addEventListener('click',function(){
            MarkTask(i);
        });

        const home = div.querySelector('.home');
        home.innerText = list[i].text;
        Body.appendChild (div);
    }
    document.querySelectorAll('.trash').forEach(function (trash , index){
        trash.addEventListener('click' , function(){
            DeleteStorageTask(index);
            ShowAllTasks();
        });
    
    });
}
export {ShowAllTasks};