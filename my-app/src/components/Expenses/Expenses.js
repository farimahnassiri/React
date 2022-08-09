import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesList from './ExpensesList';
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
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }); 
return (
    <div>
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
        <ExpensesList items={filteredExpenses}/>
   
    </Card>
    </div>
    
);
    
}

export default Expenses;