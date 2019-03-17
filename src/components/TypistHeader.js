import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Text = styled.div`
  font-size: 48px;
  font-family: Courier, monospace;
  font-weight: 300;
  display: flex;
  color: #ffffff;

  @media (max-width: 700px) {
    font-size: 21px;
  }
`;

const StyledTypist = styled(Typist)`
  display: flex;
  flex-direction: row;
`;

export const TypistHeader = ({headers}) => (
  <Text>
    <StyledTypist startDelay={1000} avgTypingDelay={200}>
      <div style={{display: 'flex'}}>
        {headers.length > 1
          ? headers.map(header => (
              <div key="header">
                {header}
                <Typist.Backspace count={header.length} delay={1000} />
              </div>
            ))
          : ''}
        {headers[0]}
      </div>
    </StyledTypist>
  </Text>
);
