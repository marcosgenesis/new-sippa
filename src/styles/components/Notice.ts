import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  padding: 20px;
  width: 25rem;
  height: 110px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
export const Badge = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 30%;
  background: ${props => lighten(0.4, `${props.color}`)};
  margin-right: 10px;
  svg {
    align-self: center;
    width: 40px;
    height: 40px;
    color: ${props => props.color};
  }
`;
export const Content = styled.div`
  h4 {
    color: #b5b7cc;
    margin-bottom: 5px;
  }
`;
