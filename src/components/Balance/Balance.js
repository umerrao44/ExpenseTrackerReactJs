import React from 'react'
import { useSelector } from 'react-redux/es/exports';
const Balance = () => {
    const expenses = useSelector(state=>state.expenseReducer.expenses)
    let a =0;
    let c = 0;
    {expenses.map((value)=>{
     a = `${value.expenses}`
     c += Number(a)
    })}
  return (
    <div><h3>Total Balance</h3>
    <h2>${parseFloat(c).toFixed(2)}</h2>
    </div>
  )
}

export default Balance