import React, { Component } from 'react';
import UserCard from './UserCard';
// import axios from 'axios';
//
// const API = 'http://localhost:8080/api/';

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
      return users.map((user) => {
        return <UserCard key={user._id} user={user} />
      })
      // users.forEach(user =>
      //
      // )
    } else {
      return <div>'no data'</div>;
    }
  };
}

export default UserList;
