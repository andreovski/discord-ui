import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img
            src="https://avatars0.githubusercontent.com/u/62680019?s=460&u=e658a03f433b7e15699dc8a2c0b81aa9cfa109b3&v=4"
            alt="Profile Picture"
          />
        </Avatar>
        <UserData>
          <strong>Andreovski</strong>
          <span>#4747</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
