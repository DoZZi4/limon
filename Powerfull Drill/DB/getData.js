import fs  from'fs';
import path  from'path';
// const dataPath = path.join(__dirname,"data.json")
const dataPath = path.resolve('./DB/data.json')

const getData = (key)=>{
    const data = fs.readFileSync(dataPath, {encoding:'utf8'});
    const parseData = JSON.parse(data)
    if (key){
        return parseData[key]
    }
    return parseData;
}
export {getData}

