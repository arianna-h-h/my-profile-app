import React, { Component } from 'react';

class ProfileInfo extends Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.updateUser(this.props.id, { 'image': this.state.value });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type='text'
            name='image'
            placeholder={this.props.image}
            value={this.state.image}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='+' />
      </form>
    );
  }
}

export default ProfileInfo;
