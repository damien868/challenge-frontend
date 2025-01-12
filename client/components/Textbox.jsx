import React, { Component } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../styles/Textbox.css';

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
        <label htmlFor='response'></label>
        <input
          type='text'
          id='response'
          name='response'
          placeholder='Start typing here'
          onChange={this.onChange}
        ></input>
        <input type='submit' value='>'></input>
      </form>
    );
  }
}

export default Textbox;
