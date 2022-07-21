import React from 'react'
import { useSelector } from 'react-redux/es/exports';
const HeaderExpense = () => {
    const expenses = useSelector(state=>state.expenseReducer.expenses)
    let a =0;
    let b= 0;
    let c = 0;
    let d = 0;
    {expenses.map((value)=>{
     a = `${value.expenses}`
     b = Number(a)
     if(b > 0){
      
        c += b
     }else{
        
        d += b
     }
    })}
  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',padding:'2px'}}>
        <div  style={{padding:'2px'}}>
        
        <h3>Income</h3>
      <h2 style={{color:"green"}}>${parseFloat(c).toFixed(2)}</h2>
      
        </div>
       
        <div style={{padding:'2px'}}>
           
            <h4>Expense</h4>
            <h2 style={{color:"red"}}>${parseFloat(Math. abs(d)).toFixed(2)}</h2>
            </div>
        </div>
  )
}

export default HeaderExpense
