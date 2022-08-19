import React, { useState } from 'react';

import './NewUserForm.css';


const NewUserForm = (props) =>{

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
        const newUsereData = {
          name: enteredName,
          age: enteredAge
        };
    
       // props.onSaveExpenseData(expenseData);
        setEnteredName('');
        setEnteredAge('');
      };

    return(
        <form onSubmit={submitHandler}>
        <div className='new-user__controls'>
          <div className='new-user__control'>
            <label>Username</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={nameChangeHandler}
            />
          </div>
          <div className='new-user__control'>
            <label>Age (Years)</label>
            <input
              type='number'
              min='1'
              step='1'
              value={enteredAmount}
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div className='new-user__actions'>
          <button type='submit'>Add User</button>
        </div>
      </form>
    );
};

export default NewUserForm;