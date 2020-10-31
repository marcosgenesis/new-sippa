import React from 'react';
import { Frame } from 'framer';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Container, UserInfo } from '../styles/components/Header';
import profile from '../assets/svg/profile.svg';
import Link from 'next/link';

const Header: React.FC = () => {
  const boxVariants = {
    checked: { scale: 1, backgroundColor: 'rgba(255, 255, 255, 1)' },
    unchecked: { scale: 0.8, backgroundColor: 'rgba(255, 255, 255 ,0.5)' },
  };

  const checkVariants = {
    checked: { pathLength: 0.9 },
    unchecked: { pathLength: 0 },
  };

  const [isChecked, setIsChecked] = React.useState(true);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <Container>
      <Link href="/">
        <motion.div
          size={'100%'}
          background={''}
          style={{
            fontFamily: 'Montserrat, Work Sans, sans-serif',
            fontWeight: 'bold',
            letterSpacing: '-0.04em',
            fontSize: 26,
            color: '#000',
          }}
          initial={{ y: -26 * 1.2 }}
          animate={{ y: 0 }}
          transition={{
            ease: 'easeOut',
            duration: 0.4,
          }}
        >
          sippa
        </motion.div>
      </Link>
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
