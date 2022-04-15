import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_DATA = [
    { id: 0, title: "Car insurance", amount: 200, date: (new Date(2021, 5, 15)) },
    { id: 1, title: "padel game", amount: 30, date: (new Date(2022, 4, 20)) },
    { id: 2, title: "expensive dinner", amount: 50.23, date: (new Date(2021, 2, 28)) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (newExpense) => {
    console.log('new expense: ', newExpense);
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses]; // updating state depending on previous state
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App; // will be imported in index.js
