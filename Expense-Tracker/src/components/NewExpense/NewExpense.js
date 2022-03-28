import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

function NewExpense(props){

    const [isEditing, setIsEditing] =  useState(false)

    const newExpenseHandler = (expense) =>{
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        setIsEditing(false)
        props.onSaveNewExpense(expenseData)
    }

    const startEditingHandler = () =>{
        setIsEditing(true) 
    }

    const stopEditinghandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense '>
            {isEditing && <ExpenseForm onCancel = { stopEditinghandler } onNewExpense = {newExpenseHandler}/>}
            {!isEditing && <button onClick={ startEditingHandler }> Add New Expense </button>}

        </div>
    )
}

export default NewExpense