import React, { Component } from 'react';
import NewUserBoxContainer from './NewUserBoxContainer';
import UserCard from './UserCard';

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = { users: [], loaded: false };
  }

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
          <div className='user-card'><NewUserBoxContainer /> </div>
          {userCards}
        </div>
      );
    } else {
      return <div>'no data'</div>;
    }
  };
}

export default UserList;
