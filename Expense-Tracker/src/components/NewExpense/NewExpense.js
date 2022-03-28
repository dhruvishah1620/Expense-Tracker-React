import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props){

    const newExpenseHandler = (expense) =>{
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        props.onSaveNewExpense(expenseData)
    }

    const addNewExpense = () =>{
        return <ExpenseForm onNewExpense = { newExpenseHandler }/>
    }

    return (
        <div className='new-expense '>
            <button onClick={ addNewExpense }> Add New Expense </button>
        </div>
    )
}

export default NewExpense