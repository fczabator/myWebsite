import React from 'react';
import LeftArrow from '../assets/left-arrow.svg';
import styled from 'styled-components';
import {navigate} from 'gatsby';

const Link = styled.div`
  font-size: 15px;
  margin: 10px 10px 10px 0;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  :hover {
    svg {
      opacity: 1;
    }
  }
`;

const LeftArrowSmall = styled(LeftArrow)`
  width: 35px;
  transition: opacity 0.5s;
  opacity: ${props => (props.isActive ? 1 : 0)};
`;

export const NavigationLink = ({text, url, isActive}) =>
  console.log(isActive) || (
    <Container>
      <Link onClick={() => navigate(url)}>{text}</Link>
      <LeftArrowSmall isActive={isActive} />
    </Container>
  );
