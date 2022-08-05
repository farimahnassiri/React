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
       {props.items.map((expense) => (
            <ExpenseItem 
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
            />
       ))}
    </Card>
    </div>
    
);
    
}

export default Expenses;