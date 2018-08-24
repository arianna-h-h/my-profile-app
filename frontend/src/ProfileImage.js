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
    const { updateUser, id, loadUsers } = this.props;
    const { value } = this.state;
    updateUser(id, { 'image': value })
      .then(() => loadUsers());
  }

  render () {
    const { image } = this.props;
    return (
      <div>
        <img
          className='profile-picture'
          src={image}
          alt='Profile Picture'
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              name='image'
              placeholder=''
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          {this.state.value === ''
            ? <i className='fas fa-pencil-alt fa-xs fa-xs' />
            : <button><i className='fas fa-check' /> </button>}
        </form>
      </div>
    );
  }
}

export default ProfileInfo;
