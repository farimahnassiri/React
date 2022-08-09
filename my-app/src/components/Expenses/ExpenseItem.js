import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props){  
   // this wouldn't work, we need to use states to updated the value after react converts JSX to DOM 
   //let title = props.title;
    
    const [title, setTitle] = useState(props.title);

   //or the alternative function clickHandler (){...}
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };    

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>     
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    </li>
    );
}

export default ExpenseItem;