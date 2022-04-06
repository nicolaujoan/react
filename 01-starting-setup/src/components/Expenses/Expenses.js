import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = props => {
    return <Card className='expenses-list'>
        <ExpenseItem title={props.expenses[0].title}
        amount={props.expenses[0].amount}></ExpenseItem>
        <ExpenseItem title={props.expenses[1].title}
        amount={props.expenses[1].amount}></ExpenseItem>
        <ExpenseItem title={props.expenses[2].title}
        amount={props.expenses[2].amount}></ExpenseItem>
    </Card>
}

export default Expenses;