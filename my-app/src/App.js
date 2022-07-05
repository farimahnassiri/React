import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
