import React, { Component } from 'react';

class ProfileInfo extends Component {
  constructor (props) {
    super(props);
    this.state = { firstName: '', lastName: '' };

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
    const { updateUser, id, loadUsers } = this.props;
    const { firstName } = this.state;
    updateUser(id, { 'firstName': firstName })
      .then(() => loadUsers());
  }

  handleSubmitLastName (e) {
    e.preventDefault();
    const { updateUser, id, loadUsers } = this.props;
    const { lastName } = this.state;
    updateUser(id, { 'lastName': lastName })
      .then(() => loadUsers());
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmitFirstName}>
          {this.state.firstName === ''
            ? <i className='fas fa-pencil-alt fa-xs' />
            : <button><i className='fas fa-check' /> </button>}
          <label>
            <input
              type='text'
              name='firstName'
              placeholder={this.props.firstName}
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <form onSubmit={this.handleSubmitLastName}>
          {this.state.lastName === ''
            ? <i className='fas fa-pencil-alt fa-xs' />
            : <button><i className='fas fa-check' /> </button>}
          <label>
            <input
              type='text'
              name='lastName'
              placeholder={this.props.lastName}
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
        </form>

      </div>
    );
  }
}

export default ProfileInfo;
