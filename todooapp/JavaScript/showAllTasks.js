import { checkboxTemplate } from './templates.js';
import {EditTask} from './EditTask.js';
function MarkTask (task, index){
    
}
function ShowAllTasks (list){
    let tasks = document.querySelectorAll('.task')
    for (let i = 0;i <tasks.length;i++){
        tasks[i].remove();
    } 
    const Body = document.querySelector('.boddy');
    for (let i = 0;i<list.length;i++) {
        const div =document.createElement('div');
        div.innerHTML=checkboxTemplate;
        div.querySelector('.click').setAttribute('id' , `click${i}`);
        div.querySelector('.tesks').setAttribute('for', `click${i}`)
        const home = div.querySelector('.home');
        home.innerText = list[i].text;
        Body.appendChild (div);
    }
}
export {ShowAllTasks};