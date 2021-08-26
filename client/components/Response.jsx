import React, { Component } from 'react';

export class Response extends Component {
  render(props) {
    return this.props.response ? <div>{this.props.response}</div> : '';
  }
}

export default Response;
