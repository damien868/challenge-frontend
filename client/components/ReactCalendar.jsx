import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ReactCalendar(props) {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <button
        onClick={() =>
          props.handleBirthday(
            date.getMonth(),
            date.getDate(),
            date.getFullYear()
          )
        }
      >
        Submit
      </button>
    </div>
  );
}
