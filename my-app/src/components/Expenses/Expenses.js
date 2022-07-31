import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
//use props and renders expenseItems to make APP.JS file smaller
// const Expenses = () => {...}
function Expenses(props){
const [filteredYear , setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
return(
    <div>
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
    </Card>
    </div>
    
);
    
}

export default Expenses;