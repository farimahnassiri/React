import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
//use props and renders expenseItems to make APP.JS file smaller
function Expenses(props){
return(
    <div className="expenses">
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
    </div>
);
    
}

export default Expenses;