import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
function Expnses(props) {
  const [year, setYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeYear={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expnses;
