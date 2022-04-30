import { checkboxTemplate } from './templates.js';
function ShowAllTasks (list){
    const Body = document.querySelector('.boddy');
    for (let i = 0;i<list.length;i++) {
        const div =document.createElement('div');
        div.innerHTML=checkboxTemplate;
        const home = div.querySelector('.home');
        home.innerText = list[i].text;
        Body.appendChild (div)
    }
}
export {ShowAllTasks};