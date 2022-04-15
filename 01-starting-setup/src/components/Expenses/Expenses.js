import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState('2022');

  const changeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter( e => e.date.getFullYear().toString() === year);

  return (
    <div>
      <Card className="expenses-list">
        <ExpenseFilter selected={year} onChangeYear={changeYearHandler} />
        {filteredExpenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
