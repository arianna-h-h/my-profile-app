import React, { Component } from 'react';

class ProfileInfo extends Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitFirstName = this.handleSubmitFirstName.bind(this);
    this.handleSubmitLastName = this.handleSubmitLastName.bind(this);
  };

  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmitFirstName (e) {
    e.preventDefault();
    this.props.updateUser(this.props.id, { 'firstName': this.state.firstName });
  }

  handleSubmitLastName (e) {
    e.preventDefault();
    this.props.updateUser(this.props.id, { 'lastName': this.state.lastName });
  }

  render () {
    return (
      <div className='name'>
        <form onSubmit={this.handleSubmitLastName}>
          <label>
            <input
              type='text'
              name='lastName'
              placeholder={this.props.lastName}
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='+' />
        </form>
        <form onSubmit={this.handleSubmitFirstName}>
          <label>
            <input
              type='text'
              name='firstName'
              placeholder={this.props.firstName}
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='+' />
        </form>
      </div>
    );
  }
}

export default ProfileInfo;
