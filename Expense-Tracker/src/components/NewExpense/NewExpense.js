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

    return (
        <div className='new-expense '>
            <ExpenseForm onNewExpense = { newExpenseHandler }/>
        </div>
    )
}

export default NewExpense