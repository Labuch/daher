import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 45px;
`;

function Header() {
  return <StyledHeader>{'<'} Mon compte</StyledHeader>;
}

export default Header;
