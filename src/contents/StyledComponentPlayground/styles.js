import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
`;

export const SquareEl = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`