import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 19rem;
  height: 20rem;
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
    width: 17rem;
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
