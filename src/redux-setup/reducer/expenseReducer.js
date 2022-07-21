

const initialState = {
    expenses: [], 

  }
    
    export const  expenseReducer = (state = initialState, action) =>{
     
      switch (action.type) {
        case  `fetchExpenses`:
          return {
            ...state,
            expenses: [...state.expenses , action.payload],
            
          }
          
            case `deleteListValue`:
              console.log(action.payload.id,'in delete list reducer')
              console.log(state.expenses.filter((value)=> value.expenseHistory != action.payload.expenseHistory),'++++++++')
            return{
              ...state,
           
        expenses: state.expenses.filter((value)=> value.id != action.payload.id)
      
          }
      
        default:
          return state
      }
    }