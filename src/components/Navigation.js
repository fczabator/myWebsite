import React from 'react';
import {NavigationLink} from './NavigationLink';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 700px) {
    justify-content: space-around;
  }
`;

export const Navigation = () => (
  <Container>
    <NavigationLink text="Home" url="/" />
    <NavigationLink text="My Projects" url="/projects" />
    <NavigationLink text="Contact" url="/contact" />
  </Container>
);
