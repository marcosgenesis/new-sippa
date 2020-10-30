import React, { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { IoIosCloseCircleOutline, IoMdWarning } from 'react-icons/io';

import { Container, Badge, Content } from '../styles/components/Notice';

const Notice: React.FC = ({ status, course, message }) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    switch (status) {
      case 'info':
        setIcon(FiInfo);
        break;
      case 'warning':
        setIcon(IoMdWarning);
        break;
      case 'error':
        setIcon(IoIosCloseCircleOutline);
        break;
      default:
        break;
    }
  }, []);
  return (
    <Container>
      <Badge>{icon}</Badge>
      <Content>
        <h4>{course}</h4>
        <p>{message}</p>
      </Content>
    </Container>
  );
};

export default Notice;
