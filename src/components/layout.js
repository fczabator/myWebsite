import React from 'react';
import {TypistLabel} from './Title';
import './layout.css';
import styled from 'styled-components';
import {Navigation} from './Navigation';

const Content = styled.div`
  margin: 30px auto;
`;
const Header = styled.div`
  margin: 20px 10px;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = ({children}) => (
  <Page>
    <Header>
      <Navigation />
      <Centered>
        <TypistLabel />
      </Centered>
    </Header>
    <Content>{children}</Content>
  </Page>
);

export default Layout;
