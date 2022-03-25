import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'

function Expenses(props){
    
    return(
        <Card className='expenses'>
            {props.expense.map((temp) => 
                <ExpenseItem
                title = {temp.title}
                amount = {temp.amount}
                date = {temp.date}
                />
            )}
        </Card>
    )
};

export default Expenses;