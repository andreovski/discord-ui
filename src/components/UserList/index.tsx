import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel 1</Role>
      <UserRow nickname="Andreovski" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="chipchrome" isBot />
      <UserRow nickname="Guilherme Rodz" />
    </Container>
  );
};

export default UserList;
