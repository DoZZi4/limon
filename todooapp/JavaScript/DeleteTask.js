function DeleteTask (list , TasksIndex ) {
    let Dtask = [] ;
    for (let i = 0 ;i<list.length;i++ ){
        if (i!== TasksIndex){
            Dtask.push (list[i]);
            
        }
    }
    return Dtask;
}
export {DeleteTask};

