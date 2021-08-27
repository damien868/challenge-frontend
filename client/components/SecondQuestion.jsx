import React, { Component, useState } from 'react';
import ReactCalendar from './ReactCalendar';
import ThirdQuestion from './ThirdQuestion';

export class SecondQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdayMonth: '',
      birthdayDate: '',
      birthdayYear: '',
    };
    this.handleBirthday = this.handleBirthday.bind(this);
  }
  handleBirthday = (month, date, year) => {
    this.setState({
      birthdayMonth: `${month + 1}`,
      birthdayDate: `${date}`,
      birthdayYear: `${year}`,
    });
  };
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
        {this.state.birthdayDate === '' ? (
          <ReactCalendar handleBirthday={this.handleBirthday} />
        ) : (
          <ThirdQuestion
            result={` ${months[parseInt(this.state.birthdayMonth)]} ${
              this.state.birthdayDate
            }, ${this.state.birthdayYear}`}
          />
        )}
      </div>
    );
  }
}

export default SecondQuestion;
