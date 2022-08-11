import *  as React from 'react';
// import { useState } from 'react';
import Box from '@mui/material/Box';
import {  Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { expenseList } from '../../redux-setup/ActionCreator';
import classes from './BtnStyle.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddExpenses() {

  const dispatch = useDispatch();

  const initialValues = {
    expenseHistory: '',
    expenses: ''
  }
  const onSubmit = (values, { resetForm }) => {
    const data = {
      expenseHistory: values.expenseHistory,
      expenses: values.expenses,
      id: Math.random()
    }

    dispatch(expenseList(
      data

    ))
    resetForm({ values: '' })

    console.log(values.expenseHistory, "values")

  }
  const validationSchema = Yup.object().shape({
    expenseHistory: Yup.string().required('Expense History is Required'),
    expenses: Yup.string().required('Expense is Required')
  
  })
  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,

  })




  return (
    <Grid sx={{ position: 'sticky' }}>

      <Box

        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },

        }}

      >

        <div>
          <form onSubmit={formik.handleSubmit}>

            <TextField
          
              variant="standard"
              id="standard-basic"
              label="Enter History"
              name='expenseHistory'
              // value={formik.values.expenseHistory}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps('expenseHistory')}

            />
            { formik.touched.expenseHistory && formik.errors.expenseHistory && (
              <div>{formik.errors.expenseHistory}</div> 
            )}

            <br></br>

            <TextField
              
              variant="standard"
              type="number"
              id="standard-basic"
              label="Enter Expenses"
              name='expenses'
              // value={formik.values.expenses}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps('expenses')}
           

            />
            {formik.touched.expenses && formik.errors.expenses && (
              <div>{formik.errors.expenses}</div>
            )}
            <button type='submit' className={classes.btn} style={{ width: "55ch", height: "7ch", backgroundColor: "#9875bb", color: "white", borderRadius: 20, border: 'none', marginTop: 30, fontWeight: 20, boxShadow: 4, cursor: 'pointer' }}>Add Transactions</button>
          </form>

        </div>


      </Box>

    </Grid>
  );
}
