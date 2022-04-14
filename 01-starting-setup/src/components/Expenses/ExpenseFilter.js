import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    const selectedYear = event.target.value;
    props.onChangeYear(selectedYear);
  };

  return (
    <div className="wrapper">
      <div className="flex-container">
        <div className="title">Filter by year</div>
        <select className="year" onChange={yearChangeHandler}>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
