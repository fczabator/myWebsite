import React from 'react';
import {TypistLabel} from './Title';
import './layout.css';
import styled from 'styled-components';

const Content = styled.div`
  margin: 30px auto;
`;
const Header = styled.div`
  margin: 10px auto;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = ({children}) => (
  <Page>
    <Header>
      <Navigation />
      <TypistLabel />
    </Header>
    <Content>{children}</Content>
  </Page>
);

export default Layout;
