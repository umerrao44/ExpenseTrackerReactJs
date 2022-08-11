

const initialState = {
    expenses: [], 

  }
    
    export const  expenseReducer = (state = initialState, action) =>{
     console.log(action.payload,"inreducer")
      switch (action.type) {
        case  `fetchExpenses`:
          return {
            ...state,
            expenses: [...state.expenses , action.payload],
            
          }
          
            case `deleteListValue`:
              console.log(action.payload,'in delete list reducer')
              console.log(state.expenses.filter((value)=> value.expenseHistory != action.payload.expenseHistory),'++++++++')
            return{
              ...state,
           
        expenses: state.expenses.filter((value)=> value.id != action.payload.id)
      
          }
      
        default:
          return state
      }
    }