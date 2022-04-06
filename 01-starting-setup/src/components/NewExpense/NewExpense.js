import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    // 1) this function will be pased as a prop, and in the child component we will execute it
    // 2) then the data will be passed to this component (child-parent communication)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString(),  // good for demo
        };
        props.onAddNewExpense(expenseData);
    }

    return <div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;