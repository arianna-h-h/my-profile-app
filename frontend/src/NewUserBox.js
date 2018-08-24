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
    const { createUser, loadUsers } = this.props;
    createUser(this.state)
      .then(() => loadUsers());
  }

  render () {
    return (
      <div>
        <h3 className='user-title'>CREATE NEW USER</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type='text'
              name='image'
              placeholder='Image Url'
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type='text'
              name='description'
              placeholder='User Description'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default NewUserBox;
