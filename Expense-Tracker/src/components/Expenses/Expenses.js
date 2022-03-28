import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props){

    const [ selectedYear, setSelectedYear ] = useState('2020')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
        console.log(year)
    }

    return(
        <Card className='expenses'>
            <ExpensesFilter defaultYear={selectedYear} onYearChange = {yearChangeHandler} />
            {props.expense.map((temp) => 
                <ExpenseItem
                key = {temp.id}
                title = {temp.title}
                amount = {temp.amount}
                date = {temp.date}
                />
            )}
        </Card>
    )
};

export default Expenses;