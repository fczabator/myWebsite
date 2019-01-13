import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Text = styled.div`
  font-size: 38px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;

  @media (max-width: 700px) {
    font-size: 21px;
  }
`;

const BlueText = styled.span`
  color: ${props => props.theme.primary};
`;

export class TypistHeader extends React.Component {
  render() {
    return (
      <Text>
        <Typist startDelay={2000} avgTypingDelay={200}>
          Filip Czabator
          <Typist.Backspace count={14} delay={4000} />
          <BlueText>React & Node Developer</BlueText>
          <Typist.Backspace count={22} delay={4000} />
          Filip Czabator
        </Typist>
      </Text>
    );
  }
}
