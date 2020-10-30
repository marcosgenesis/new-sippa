import React from 'react';

import { Container } from '../styles/components/CourseCard';
import { motion } from 'framer-motion';
interface CourseCardProp {
  image: string;
  title: string;
  path: string;
}
const CourseCard: React.FC = ({ title, image, path }: CourseCardProps) => {
  return (
    <Container>
      <img src={image} alt="Vetor Disciplina" />
      <h2>{title}</h2>
      <motion.button
        animate={{ translateY: [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
      >
        Ver detalhes
      </motion.button>
    </Container>
  );
};

export default CourseCard;
