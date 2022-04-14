import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_DATA = [
    { title: "Car insurance", amount: 200 },
    { title: "padel game", amount: 30 },
    { title: "expensive dinner", amount: 50.23 },
  ];

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense]; // updating state depending on previous state
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
