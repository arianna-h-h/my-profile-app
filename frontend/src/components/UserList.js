import React, { Component } from 'react';
import NewUserBoxContainer from '../containers/NewUserBoxContainer';
import UserCard from './UserCard';

class UserList extends Component {
  componentDidMount () {
    this.props.loadUsers();
  }

  render () {
    const { users, loaded } = this.props;
    if (loaded && users && users.length > 0) {
      const userCards = users.map((user) => (
        <UserCard key={user._id} id={user._id} user={user} />
      ));
      return (
        <div>
          <div className='new-user-card'><NewUserBoxContainer /> </div>
          {userCards}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };
}

export default UserList;
