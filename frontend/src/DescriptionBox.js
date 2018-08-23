import React, { Component } from 'react';

class DescriptionBox extends Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }


  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.updateUser(this.props.id, { 'description': this.state.value })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type='text'
            placeholder={this.props.description}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default DescriptionBox;
