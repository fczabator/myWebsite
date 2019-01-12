import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Text = styled.div`
  font-size: 26px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;
`;

export class TypistLabel extends React.Component {
  render() {
    return (
      <Text>
        <Typist startDelay={2000} avgTypingDelay={200}>
          Filip Czabator
        </Typist>
      </Text>
    );
  }
}
