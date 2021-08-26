import React, { Component } from 'react';

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = { response: '' };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleResponse(this.state.response);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for='response'></label>
        <input
          type='text'
          id='response'
          name='response'
          onChange={this.onChange}
        ></input>
        <input type='submit'></input>
      </form>
    );
  }
}

export default Textbox;
