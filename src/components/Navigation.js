import React from 'react';
import {NavigationLink} from './NavigationLink';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Navigation = () => (
  <Container>
    <NavigationLink text="Home" />
    <NavigationLink text="My Projects" />
    <NavigationLink text="Blog" />
    <NavigationLink text="Contact" />
  </Container>
);
