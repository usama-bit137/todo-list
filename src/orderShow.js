export function priorityShow(todoArray) {
    const priorityArray = []; 
    // eslint-disable-next-line no-plusplus, no-unreachable-loop
    for (let i = 0; i < todoArray.length; i++ ) {
        if (todoArray[i].priority === "high") {
            priorityArray.push(todoArray[i]);
        }     
    } return priorityArray
}

export function projectShow(todoArray) {
    console.log(todoArray);
}

export function dateShow(todoArray) {
    // we want to sort todoArray in order of
    // date. We need a mapping method.
    
    const dateOrder = [...todoArray].sort((obj1, obj2) => 
        new Date(`${obj1.date}, ${obj1.time}`) - new Date(`${obj2.date}, ${obj2.time}`), 
    )
    return dateOrder
}