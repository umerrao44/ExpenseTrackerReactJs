

const initialState = {
  expenseHistory: ""
}
  console.log()
  export const  listReducer = (state = initialState, action) =>{
    // console.log(action.payload,"in Reducer")
    switch (action.type) {
      case  `mapList`:
        return {
          ...state,
          expenseHistory: action.payload,
          
        }
      default:
        return state
    }
  }