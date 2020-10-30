import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 270px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
  margin: 20px;
  img {
    position: absolute;
    top: -30px;
    width: 240px;
  }
  h2 {
    height: 80px;
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
