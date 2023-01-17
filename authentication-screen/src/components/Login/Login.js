import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// function can be created outside the scope of component because its independent
// and does not need interact with anything inside the component function
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.includes('@') };
  }
return { value:'', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type ==='USER_PASS'){
    return {value: action.val , isValid: action.val.trim().length > 6};
  }
  if (state.type ==='PASS_BLUR'){
    return {value: state.val , isValid: state.val.trim().length > 6};
  }
  return {value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value:'' , isValid: null }); 
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid: null});


  useEffect(()=>{
    console.log('EFFECT RUNNING');
    
    return () => {
      console.log('CLEANUP EFFECT');
    }
  },[]);


  //problem here is that this effect will run too often!
  useEffect(() => {
    
    const identifier = setTimeout(() => {
      console.log('Cheking for validity!');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);
  
    return () => {
      console.log('CLEANUP!');
      //this function is built in by the browser
     clearTimeout(identifier);
    };
  },[emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_PASS', val: event.target.value});

    //because of how react schedules state changes and updates, it is possible that
    //we run into a problem having these two depended on one another and this is
    // a good example of where we'd use reducer
    // setFormIsValid(
    //   // emailState.value.includes('@') && event.target.value.trim().length > 6 OR...
    //   emailState.isValid && event.target.value.trim().length > 6
    
    // );
  };

  const validateEmailHandler = () => {
  //  setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'PASS_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
