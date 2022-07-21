import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
      ...enteredExpenseData,
     id: Math.random().toString()
    };
  props.onAddExpense(expenseData);
};

//communicating up by passing the pointer
return (
<div className='new-expense'>
  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
</div>
);
};

export default NewExpense;