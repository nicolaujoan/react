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
        <ExpenseFilter onChangeYear={changeYearHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
