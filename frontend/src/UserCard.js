import React, { Component } from 'react';

import ProfileInfoContainer from './ProfileInfoContainer';
import DescriptionBoxContainer from './DescriptionBoxContainer';
import ProfileImageContainer from './ProfileImageContainer';

class UserCard extends Component {
  render () {
    const { firstName, lastName, image, description } = this.props.user;
    const { id } = this.props;
    return (
      <div className='user-card'>
        <ProfileInfoContainer className='user-card' firstName={firstName} lastName={lastName} />
        <DescriptionBoxContainer description={description} id={id} />
        <ProfileImageContainer image={image} />
      </div>
    );
  }
}

export default UserCard;
