import React from 'react';
import {NavigationLink} from './NavigationLink';
import styled from 'styled-components';
import {Location} from '@reach/router';

const Container = styled.div`
  position: absolute;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 700px) {
    justify-content: space-around;
  }
`;

const navigationLink = [
  {
    text: 'About',
    path: '/about'
  },
  {
    text: 'My Projects',
    path: '/projects'
  },
  {
    text: 'Contact',
    path: '/contact'
  }
];

const renderNavigationLinks = ({location}) =>
  navigationLink.map(link => (
    <NavigationLink
      text={link.text}
      url={link.path}
      isActive={link.path === location.pathname}
    />
  ));

export const Navigation = () => (
  <Container>
    <Location>{renderNavigationLinks}</Location>
  </Container>
);
