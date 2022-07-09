import Expenses from "./components/Expenses";

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
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
