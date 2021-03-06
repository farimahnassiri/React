import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

//using one states and storing-in/passing an object
    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    }); 
  const titleChangeHandler = (event) => {
   setEnteredTitle(event.target.value);
   // to have only the title changed and not have the other data lost we use the "spread operator"
   // here, we overwrite the enteredTitle
//    setUserInput({
//     ...userInput,
//         enteredTitle:event.target.value,
//    });

/* this is the alternative; more efficient way to ensure we're getting the most
*  updated value given that React will schedule state updates and the 
*  previous method cannot garauntee the lastest value if there are many updates scheduled!
*/ 
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });

  };

  const amountChangeHandler = (event) => {
   setEnteredAmount(event.target.value);
//    setUserInput({
//     ...userInput,
//         enteredAmount:event.target.value,
//     });
  };

  const dateChangeHandler = (event) => {
   setEnteredDate(event.target.value);
//    setUserInput({
//     ...userInput,
//         enteredDate:event.target.value,
//     });
  };

  const submitHandler = (event) => {
    //this is default js function
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
    //communicating up!
    props.onSaveExpenseData(expenseData);
    //when the form is submited we go back to initial state
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit = {submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' 
          value={enteredTitle} 
          onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;