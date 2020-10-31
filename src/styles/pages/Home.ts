import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
export const Courses = styled.div`
  display: flex;
  width: 50%;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
export const Notices = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  ul {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const NoticeHeader = styled.div`
  display: flex;
  svg {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;
