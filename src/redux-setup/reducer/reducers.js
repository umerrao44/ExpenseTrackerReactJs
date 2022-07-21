import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { expenseReducer } from "./expenseReducer";
 const reducers = combineReducers({
    listReducer,
    expenseReducer
   
 })
 export default reducers;