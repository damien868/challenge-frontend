import React, { Component } from 'react';
import Pronouns from './Pronouns';

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
        <div>{this.props.result}</div>
        <div>Now that I know you a little better; what are your pronouns?</div>
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
          this.state.response
        )}
      </div>
    );
  }
}

export default ThirdQuestion;
