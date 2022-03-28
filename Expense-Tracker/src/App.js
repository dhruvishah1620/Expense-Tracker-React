import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id:"e1",
    title:"Netflix",
    amount:199,
    date:new Date(2022, 2, 23)
  },
  {
    id:"e2",
    title:"Piano",
    amount:1500,
    date:new Date(2021, 6, 16)
  },
  {
    id:"e3",
    title:"Cube",
    amount:100,
    date:new Date(2020, 4, 13)
  },
  {
    id:"e4",
    title:"Food",
    amount:700,
    date:new Date(2020, 11, 14)

  }
]


function App() {

  const [ expenses, setExpense ] = useState(DUMMY_EXPENSES);

  const saveNewExpenseHandler = (newExpense) => {
    setExpense((prevExpense) => {
        return [newExpense,...prevExpense]
    });
  }

  return (
    <div>
      <NewExpense onSaveNewExpense = { saveNewExpenseHandler } />
      <Expenses expense = { expenses }  />
    </div>
  );

  // what actually happens under the hood (how the react object is called and what happens)
  // Parameters(main html elment you're returning,attributes of that element,Anything between opining and closing tag)
  // This is the code which actully gets created under the hood when you run above JSX code snippet
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Expense Report!"),
  //   React.createElement(Expenses,{ expense: expense }) 
  // )
}

export default App;
