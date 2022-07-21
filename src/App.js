import { Box } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Balance from './components/Balance/Balance';
import HeaderExpense from './components/Expense-Income/HeaderExpense';
import AddExpenses from './components/Expenses/AddExpenses';
import ExpensesList from './components/Expenses/ExpensesList';
function App() {
  return (
    <div className="App">
      <Container>
    <Box sx={{ bgcolor: '#eee', height: '94vh',width:'70vh' ,marginLeft:35, boxShadow: 4}}>
      
     <h1>Expense Tracker</h1>
     
     <Balance/>
     <Box sx={{bgcolor: 'white', height: '15vh',width:'60vh' , boxShadow: 4,marginLeft:5,borderRadius:2}}>
     <HeaderExpense/>
     </Box>
        
     <div style={{position:'fixed',marginLeft:'90px'}} >
     
     <ExpensesList/>
     </div>
     <div style={{marginTop:'220px'}} >
        <AddExpenses/>
     </div>

     </Box>,
     </Container>
    </div>
  );
}

export default App;
