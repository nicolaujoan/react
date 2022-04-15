// react components are named with PascalCase
// rule -> having only one root element

import { useState } from 'react';
import './ExpenseItem.css';
import './Calendar';
import Calendar from './Calendar';
import Card from '../UI/Card';


const ExpenseItem = props => {

    const date = props.date;
    const month = date.getMonth() + 1;  // inverstigate causes
    const year = date.getFullYear();
    const day = date.toLocaleString('en-US', {day: 'numeric'});

    // array destructuring
    const [title, setTitle] = useState(props.title);  // not used yet, not modifying title
    

    return (<Card className='expense-item'>
       <Calendar day={day} month={month} year={year}></Calendar>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{"$" + props.amount}</div>
        </div>
        </Card>)
}

export default ExpenseItem;
