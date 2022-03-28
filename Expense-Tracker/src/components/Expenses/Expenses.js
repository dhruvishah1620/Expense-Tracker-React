import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props){

    const [ selectedYear, setSelectedYear ] = useState('2020')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
        console.log(year)
    }

    const filteredExpense = props.expense.filter( (expense) => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return(
        <Card className='expenses'>
            <ExpensesFilter defaultYear={selectedYear} onYearChange = {yearChangeHandler} />
            <ExpensesChart expenses = {filteredExpense} />
            <ExpenseList expense = {filteredExpense}/>
        </Card>
    )
};

export default Expenses;