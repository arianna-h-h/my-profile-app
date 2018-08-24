import React, { Component } from 'react';

class DescriptionBox extends Component {
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
    updateUser(id, { 'description': value })
      .then(() => loadUsers());
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.value === ''
          ? <i className='fas fa-pencil-alt fa-xs' />
          : <button><i className='fas fa-check' /> </button>}
        <label>
          <input type='text'
            placeholder={this.props.description}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default DescriptionBox;
