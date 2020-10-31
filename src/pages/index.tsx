import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdFilterList } from 'react-icons/md';
import CourseCard from '../components/CourseCard';
import Header from '../components/Header';

import {
  Container,
  Content,
  Courses,
  Notices,
  NoticeHeader,
} from '../styles/pages/Home';
import Notice from '../components/Notice';
import processos from '../assets/svg/processos.svg';
import api from '../services/api';
import getCourseVetor from '../services/getCourseVetor';
interface courseDTO {
  id: number;
  title: string;
  vetor: string;
}
interface noticeDTO {
  id: number;
  title: string;
  vetor: string;
}
const Home: React.FC = () => {
  const [courses, setCourses] = useState<courseDTO>([]);
  const [notices, setNotices] = useState<noticeDTO>([]);
  useEffect(() => {
    async function loadCourses() {
      const responseCourse = await api.get('/courses');
      const responseNotice = await api.get('/notices?_expand=course');
      console.log(responseNotice);
      setNotices(responseNotice.data);
      setCourses(responseCourse.data);
    }
    loadCourses();
  }, []);
  const container = {
    hidden: {
      opacity: 1,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.9,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.4 },
    },
  };
  return (
    <Container>
      <Header></Header>
      <Content>
        <Courses>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {courses.map(index => (
              <motion.li key={index.id} className="item" variants={item}>
                <CourseCard
                  title={index.title}
                  image={getCourseVetor(index.id)}
                  path={index.id}
                />
              </motion.li>
            ))}
          </motion.ul>
        </Courses>
        <Notices>
          <NoticeHeader>
            <MdFilterList color="#b5b7cc" size={30} />
            <h1>Notícias</h1>
          </NoticeHeader>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {notices.map(index => (
              <motion.li key={index.id} className="item" variants={item}>
                <Notice
                  course={index.course.title}
                  message={index.message}
                  status={index.status}
                />
              </motion.li>
            ))}
          </motion.ul>
        </Notices>
      </Content>
    </Container>
  );
};

export default Home;
