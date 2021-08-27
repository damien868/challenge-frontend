import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ReactCalendar() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
    console.log(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}
