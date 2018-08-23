import React, { Component } from 'react';
import { ProfileInfo } from './ProfileInfo';
import { DetailsBox } from './DetailsBox';
import { ProfileImage } from './ProfileImage';

class UserCard extends Component {
  render () {
    const { firstName, lastName, image, description } = this.props.user;
    return (
      <div>
        <ProfileInfo firstName={firstName} lastName={lastName} />
        <DetailsBox details={description} />
        <ProfileImage image={image} />
      </div>
    );
  }
}

export default UserCard;
