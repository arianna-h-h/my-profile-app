import React, { Component } from 'react';

import { ProfileInfo } from './ProfileInfo';
import DescriptionBoxContainer from './DescriptionBoxContainer';
import { ProfileImage } from './ProfileImage';

class UserCard extends Component {
  render () {
    const { firstName, lastName, image, description } = this.props.user;
    const { id } = this.props;
    return (
      <div>
        <ProfileInfo firstName={firstName} lastName={lastName} />
        <DescriptionBoxContainer description={description} id={id} />
        <ProfileImage image={image} />
      </div>
    );
  }
}

export default UserCard;
