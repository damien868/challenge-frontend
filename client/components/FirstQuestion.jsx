import React, { Component } from 'react';
import Response from './Response';
import Textbox from './Textbox';
import SecondQuestion from './SecondQuestion';

export class FirstQuestion extends Component {
  constructor() {
    super();
    this.state = {
      responseData: '',
      answered: false,
    };
    this.handleResponse = this.handleResponse.bind(this);
  }
  handleResponse = (response) => {
    this.setState({ responseData: response, answered: true });
  };
  render() {
    const data = this.state;
    return (
      <div>
        <div>What is your name?</div>

        {data.answered ? (
          <div>
            <Response response={this.state.responseData} />{' '}
            <SecondQuestion response={this.state.responseData} />
          </div>
        ) : (
          ''
        )}
        {!data.answered ? <Textbox handleResponse={this.handleResponse} /> : ''}
      </div>
    );
  }
}

export default FirstQuestion;
