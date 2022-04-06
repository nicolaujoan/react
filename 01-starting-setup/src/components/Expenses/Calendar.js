import './Calendar.css';

function Calendar(props) {

    return (
        <div className='calendar'>
            <div>{props.day + '/'}</div>
            <div>{props.month + '/'}</div>
            <div>{props.year}</div>
        </div>
    )
}

export default Calendar;