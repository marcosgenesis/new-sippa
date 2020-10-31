import styled from 'styled-components';
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
export const Card = styled.div``;
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
export const Calendar = styled.div`
  width: 93%;
  padding: 10px;
`;
