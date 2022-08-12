import React , { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title:'Toilet Paper',
    amount: 95,
    date: new Date(2020, 7, 14)
  },
  {
    title:'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    title:'New Desk (wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }

];

// const App = () => {...}
function App() {
  const [expenses , setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
