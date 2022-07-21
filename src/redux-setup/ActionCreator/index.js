export const userList = (list) =>{

    
    return{
        type:'mapList',
        payload: list
    };
};
export const expenseList = (expense) =>{

    // console.log(expense,"in action of expense")
    return{
        type:'fetchExpenses',
        payload: expense
    };
};
export const deleteList = (value) =>{

    // console.log(expense,"in action of expense")
    return{
        type:'deleteListValue',
        payload: value
    };
};