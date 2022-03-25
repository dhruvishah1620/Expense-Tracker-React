import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {

  const expense = [
    {
      title:"Netflix",
      amount:199,
      date:new Date(2022, 2, 23)
    },
    {
      title:"Piano",
      amount:1500,
      date:new Date(2021, 6, 16)
    },
    {
      title:"Cube",
      amount:100,
      date:new Date(2021, 4, 13)
    },
    {
      title:"Food",
      amount:700,
      date:new Date(2021, 11, 14)
    }
  ]

  return (
    <div>
      <h2>Expense Report!</h2>
      <Expenses expense = {expense}  />
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
