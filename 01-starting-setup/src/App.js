import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const [expenses, setExpenses] = useState([
    { title: 'Car insurance', amount: 200},
    { title: 'padel game', amount: 30},
    { title: 'expensive dinner', amount: 50.23}
  ]);

  const addExpenseHandler = (newExpense) => {
    console.log('new expense: ', newExpense);
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;  // will be imported in index.js

