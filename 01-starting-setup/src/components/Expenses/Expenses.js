import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState(2022);

  const changeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses-list">
        <ExpenseFilter selected={year} onChangeYear={changeYearHandler} />
        {props.expenses.map((e) => (
          <ExpenseItem title={e.title} amount={e.amount}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
