import React, { Component, useState } from 'react';
import ReactCalendar from './ReactCalendar';

export class SecondQuestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props;
    const today = new Date();
    const year = today.getFullYear();
    const day = today.getDate();
    const month = today.getMonth();
    const months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };
    return (
      <div>
        <div>DamienBot</div>
        <div>Nice to meet you {data.response}! </div>
        <div>
          Since this is your first time meeting me, let's say my birthday is
          {` ${months[month + 1]} ${day}, ${year}`}
        </div>
        <div>When's your birthday?</div>
        <ReactCalendar />
      </div>
    );
  }
}

export default SecondQuestion;
