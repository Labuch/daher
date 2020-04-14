import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const StyledLayout = styled.div`
  background-color: #eeeeee;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'serial';
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
}
