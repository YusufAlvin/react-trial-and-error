import React from 'react';
import { Container } from './styles';
import Square from './Square';

const StyledComponentPlayground = () => {
  const [state, setState] = React.useState('red');

  const handleClick = () => {
    setState('black')
  };

  return (
    <Container>
      <Square bgColor={state} onClick={handleClick} />
    </Container>
  )
};

export default StyledComponentPlayground;