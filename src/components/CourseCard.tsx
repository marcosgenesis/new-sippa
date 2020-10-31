import React from 'react';
import Link from 'next/link';

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
      <Link href={`/courses/${path}`}>
        <motion.button
          whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          Ver detalhes
        </motion.button>
      </Link>
    </Container>
  );
};

export default CourseCard;
