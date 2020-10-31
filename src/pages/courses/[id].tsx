import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import { MdFilterList } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MaterialTable from 'material-table';

import {
  Container,
  LeftMenu,
  Actions,
  Card,
  Content,
  Notices,
  Cell,
  Table,
  Calendar,
} from '../../styles/pages/Course';
import { NoticeHeader } from '../../styles/pages/Home';

import archives from '../../assets/svg/archives.svg';
import avaliations from '../../assets/svg/avaliations.svg';
import homeWorks from '../../assets/svg/homeWorks.svg';
import Notice from '../../components/Notice';
import Header from '../../components/Header';

import api from '../../services/api';
import tableIcons from '../../utils/materialTableIcons';
import { opacify } from 'polished';
const courses: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function loadNotices() {
      if (id) {
        const response = await api.get(`/courses/${id}?_embed=notices`);
        console.log(response.data);
        setCourse(response.data);
      }
    }
    loadNotices();
  }, [id]);

  const container = {
    hidden: {
      opacity: 1,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.4,
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

  const columns = [
    { title: 'Data', field: 'date' },
    {
      title: 'Diário',
      field: 'diary',
    },
    { title: 'Presença', field: 'frequency' },
  ];

  return (
    <Container>
      <Header />
      <Content>
        <LeftMenu>
          <Actions>
            <Card
              animate={{
                scale: [0.7, 1],
                x: [-10, 0],
                opacity: [0, 1],
              }}
            >
              <img src={archives} alt="" />
              <Link href="/archives">
                <motion.button whileHover={{ scale: 0.9 }}>
                  Arquivos
                </motion.button>
              </Link>
            </Card>
            <Card
              animate={{
                scale: [0.7, 1],
                x: [-50, 0],
                opacity: [0, 1],
                transition: { delay: 0.3 },
              }}
            >
              <img src={avaliations} alt="" />
              <Link href="/archives">
                <motion.button whileHover={{ scale: 0.9 }}>
                  Avaliações
                </motion.button>
              </Link>
            </Card>
            <Card
              animate={{
                scale: [0.7, 1],
                x: [-100, 0],
                opacity: [0, 1],
                transition: { delay: 0.7 },
              }}
            >
              <img src={homeWorks} alt="" />
              <Link href="/archives">
                <motion.button whileHover={{ scale: 0.9 }}>
                  Enviar trabalhos
                </motion.button>
              </Link>
            </Card>
          </Actions>
          <Calendar animate={{ y: [50, 0], opacity: [0, 1] }}>
            <MaterialTable
              icons={tableIcons}
              className="opa"
              columns={columns}
              title="Calendário"
              components={{
                Container: props => <Table {...props} />,
                Cell: props => <Cell {...props} />,
              }}
              options={{
                paginationType: 'stepped',
                searchFieldStyle: { marginRight: 10, height: 30 },
                searchFieldVariant: 'outlined',
                search: false,
              }}
            />
          </Calendar>
        </LeftMenu>
        <Notices>
          <NoticeHeader
            animate={{
              scale: [0, 1],
              opacity: [0, 1],
              transition: { delay: 0.7 },
            }}
          >
            <MdFilterList color="#b5b7cc" size={30} />
            <h1>Notícias</h1>
          </NoticeHeader>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {course &&
              course.notices.map(index => (
                <motion.li key={index.id} className="item" variants={item}>
                  <Notice
                    course={course.title}
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

export default courses;
