import React, { Component } from 'react';

import ProfileInfoContainer from '../containers/ProfileInfoContainer';
import DescriptionBoxContainer from '../containers/DescriptionBoxContainer';
import ProfileImageContainer from '../containers/ProfileImageContainer';

class UserCard extends Component {
  render () {
    const { firstName, lastName, image, description } = this.props.user;
    const { id } = this.props;
    return (
      <div className='user-card'>
        <ProfileImageContainer image={image} id={id} />
        <div className='profile-info'>
          <ProfileInfoContainer firstName={firstName} lastName={lastName} id={id} />
          <DescriptionBoxContainer description={description} id={id} />
        </div>
      </div>
    );
  }
}

export default UserCard;
