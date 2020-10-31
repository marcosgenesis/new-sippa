import React, { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { IoIosCloseCircleOutline, IoMdWarning } from 'react-icons/io';

import { Container, Badge, Content } from '../styles/components/Notice';

const Notice: React.FC = ({ status, course, message }) => {
  const [icon, setIcon] = useState(null);
  const [iconColor, setIconColor] = useState('#000');
  useEffect(() => {
    switch (status) {
      case 'info':
        setIcon(FiInfo);
        setIconColor('#00d1f1');
        break;
      case 'warning':
        setIcon(IoMdWarning);
        setIconColor('#ffc400');
        break;
      case 'error':
        setIcon(IoIosCloseCircleOutline);
        setIconColor('#ff1717');
        break;
      default:
        break;
    }
  }, []);
  return (
    <Container>
      <Badge color={iconColor}>{icon}</Badge>
      <Content>
        <h4>{course}</h4>
        <p>{message}</p>
      </Content>
    </Container>
  );
};

export default Notice;
