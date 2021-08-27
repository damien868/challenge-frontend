import React, { Component } from 'react';
import Pronouns from './Pronouns';
import '../styles/ThirdQuestion.css';

export class ThirdQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { response: '', clicked: false, submitted: false };
    this.handleClick = this.handleClick.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  handleClick = (responseOption) => {
    this.setState({ response: responseOption, clicked: true });
  };
  submitAnswer = () => {
    console.log('clicked');
    this.setState({ submitted: true });
  };
  render() {
    return (
      <div>
        <div className='response'>{this.props.result}</div>
        <br></br>
        <div>
          Now that I know you a little better;{' '}
          <span className='question'>what are your pronouns?</span>
        </div>
        <br></br>
        {!this.state.submitted ? (
          <div>
            <Pronouns handleClick={this.handleClick} />
            {!this.state.clicked ? (
              ''
            ) : (
              <button
                onClick={() => {
                  this.submitAnswer();
                }}
              >
                Submit
              </button>
            )}
          </div>
        ) : (
          <div className='response'>{this.state.response}</div>
        )}
      </div>
    );
  }
}

export default ThirdQuestion;
