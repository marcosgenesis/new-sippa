import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MTableCell } from 'material-table';

export const Container = styled.div``;
export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Actions = styled.div`
  display: flex;
`;
export const Card = styled(motion.div)`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 16rem;
  height: 14rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
  margin: 40px;
  padding: 10px;
  img {
    position: absolute;
    top: -40px;
    width: 13rem;
  }
  h2 {
    text-align: center;
    height: 60px;
  }
  button {
    background: #f3f5f7;
    border: none;
    width: 90%;
    height: 20%;
    border-radius: 10px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
`;
export const Notices = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Table = styled.div`
  background: #fff;
  border-radius: 10px;
`;
export const Cell = styled(MTableCell)`
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const Calendar = styled(motion.div)`
  width: 93%;
  padding: 10px;
`;
