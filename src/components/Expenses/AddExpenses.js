import *  as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid ,FormControl} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { userList } from '../../redux-setup/ActionCreator';
import { expenseList } from '../../redux-setup/ActionCreator';
import classes from './BtnStyle.module.css'

export default function AddExpenses() {
  const [expenseHistory, setExpenseHistory] = useState('');
  const [expenses, setExpenses] = useState('');
  const[expenseHistoryValidate, setExpenseHistoryValidate] = useState(true);
  const[expensesValidate, setExpensesValidate] = useState(true);
  const dispatch = useDispatch();
  let a = 0;

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(id,"iddddd====")
    if(expenseHistory.trim()  ===""  ){
      setExpenseHistoryValidate(false)
      return
    
    }
    if(expenses.trim() ===""){
    setExpensesValidate(false)
    return 
  }
   
    setExpenseHistoryValidate(true)
    setExpensesValidate(true)
    dispatch(expenseList({
      expenseHistory,
      expenses,
      id

    }))
   
    setExpenseHistory('');
    setExpenses('');
    console.log(expenseHistory,"expese history onClick ")
  }
const id = Math.random()
// console.log(id,'iddd')
  return (
    <Grid sx={{position:'sticky'}}>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
     
        }}
        noValidate
        autoComplete="off"
      >
    
          <div>
          <form>
         
            <TextField
              required
              variant="standard"
              id="standard-basic"
              label={!expenseHistoryValidate && <p style={{color:'red'}}>Expense History not be empty</p>}
              // placeholder='Enter Deatail'
              value={expenseHistory}
              onChange={((e) => {
                setExpenseHistory(e.target.value)
              })}
            />
        
            <br></br>
            
            <TextField
              required
              variant="standard"
              type="number"
              id="standard-basic"
              label="Enter Expenses"
              value={expenses}
              onChange={((e) => {
                setExpenses(e.target.value)
              })}
             
            />
               {!expensesValidate && <p style={{color:'red',marginTop:0}}>Expenses must not be empty</p>}
</form>

          </div>
          <button type='submit'  onClick={handleSubmit}  className={classes.btn} style={{width:"55ch",height:"7ch",backgroundColor:"#9875bb",color:"white",borderRadius:20,border:'none',marginTop:30,fontWeight:20,boxShadow:4 ,cursor:'pointer'}}>Add Transactions</button>
        
      </Box>

    </Grid>
  );
}
