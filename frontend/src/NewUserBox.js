import React, { Component } from 'react';

class NewUserBox extends Component {
  constructor (props) {
    super(props);
    this.state = { firstName: '', lastName: '', description: '', image: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const { createUser, loadUsers } = this.props
    createUser(this.state)
      .then(() => loadUsers());
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        Create New User
        <label>
          <input type='text'
            name='firstName'
            placeholder={this.props.firstName}
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input type='text'
            name='lastName'
            placeholder={this.props.lastName}
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input type='text'
            name='image'
            placeholder={this.props.image}
            value={this.state.image}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input type='text'
            name='description'
            placeholder={this.props.description}
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default NewUserBox;
