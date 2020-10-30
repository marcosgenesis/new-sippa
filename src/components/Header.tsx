import React from 'react';

import { Container, UserInfo } from '../styles/components/Header';
import profile from '../assets/svg/profile.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>sippa</h1>
      <UserInfo
        animate={{ translateY: [-30, 0] }}
        transition={{ duration: 0.7 }}
      >
        <h3>Marcos Gênesis</h3>
        <img src={profile} alt="Profile" />
      </UserInfo>
    </Container>
  );
};

export default Header;
