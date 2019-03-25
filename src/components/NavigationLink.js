import React from 'react';
import LeftArrow from '../assets/left-arrow.svg';
import styled from 'styled-components';
import {navigate} from 'gatsby';

const Link = styled.div`
  font-size: 15px;
  margin: 10px 10px 10px 0;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftArrowSmall = styled(LeftArrow)`
  width: 35px;
  transition: width 0.5s;
`;

export const NavigationLink = ({text, url, isActive}) =>
  console.log(isActive) || (
    <Container>
      <Link onClick={() => navigate(url)}>{text}</Link>
      {isActive && <LeftArrowSmall />}
    </Container>
  );
