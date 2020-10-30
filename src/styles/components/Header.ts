import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 30px;
`;
export const UserInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
`;
