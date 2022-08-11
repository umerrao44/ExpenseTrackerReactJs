import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Backdrop, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteList } from '../../redux-setup/ActionCreator';


const ExpensesList = () => {
  const expenses = useSelector(state=>state.expenseReducer.expenses)
  console.log(expenses,'in expenses')
  const dispatch = useDispatch();
  
 const handleRemove = (index) => {
  console.log(index,'value')
  dispatch(deleteList(index))

  }
  return (
    <>
 
   <Grid style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
  
   <List  sx={{ width: '200%', maxWidth: 390, bgcolor: '#eee',rowGap:10, marginTop:1,overflow: 'auto',
        maxHeight: 200, }}
      style={{}}>
      {expenses.map((value) => (
    
  <>  
     <ListItem
          key={value}
          disableGutters
          sx={{ bgcolor: 'white',marginTop:2,paddingLeft:5,boxShadow:4,borderRadius:1,border:'none',width:350}}
        
         
        >
    
          <ListItemText  primary={` ${value.expenseHistory}  `}  />
          <ListItemText primary = {`$${parseFloat(value.expenses).toFixed(2)}`} />
          <Button sx={{color:'#9875bb', cursor:'pointer'}} type="button" onClick={() => handleRemove(value)} >
            <DeleteIcon/>
          </Button>
        </ListItem>
      
      
     
       </>

      ))}
    </List>
    
    </Grid>
    </>
  )
}

export default ExpensesList