import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Text = styled.div`
  font-size: 26px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;
`;

export class TypistHeader extends React.Component {
  render() {
    return (
      <Text>
        <Typist startDelay={2000} avgTypingDelay={200}>
          Filip Czabator
          <Typist.Backspace count={14} delay={4000} />
          React & Node Developer
          <Typist.Backspace count={22} delay={4000} />
          Filip Czabator
        </Typist>
      </Text>
    );
  }
}
