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
        <Response />
        {data.answered ? <SecondQuestion /> : ''}
        <Textbox handleResponse={this.handleResponse} />
      </div>
    );
  }
}

export default FirstQuestion;
