import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {

    if (props.expense.length === 0){
        return <h2 className="expenses-list__fallback">NO EXPENSES FOUND</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expense.map((temp) => 
                <ExpenseItem
                key = {temp.id}
                title = {temp.title}
                amount = {temp.amount}
                date = {temp.date}
                />
            )}
        </ul>
    )

}

export default ExpenseList;