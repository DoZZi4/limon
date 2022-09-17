// saveData должна сохранять переданные данные в data.json
// Логика работы
// 1 - читаем данные с помощью getData, не забыть про JSON.parse
// 2 - Заменяем данные на данные из аргумента функции 
// 3 - Пишем данные в data.json, не забыть про JSON.stringify
// Ссылка на запись данных 
// https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
// https://nodejs.dev/learn/writing-files-with-nodejs
import {getData} from'./getData.js';
import fs from'fs'
import path from'path'
const saveData = (key, value )=>{
    const data = getData()
    data[key]= value
    const dataPath = path.resolve("./DB/data.json")
    fs.writeFileSync(dataPath,JSON.stringify(data), {encoding:'utf8'});
}

export { saveData }

