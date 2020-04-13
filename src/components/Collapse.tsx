import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Row } from '../Layout';

export const Puce = styled.div`
  position: relative;
  border-style: none none solid solid;
  border-color: #757575;
  border-width: 1px;
  width: 20px;
  bottom: 10px;
`;

export const Ul = styled.ul`
  margin-block-start: 1em;
`;
export const Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  name: string;
}

export const Collapse: FunctionComponent<IProps> = ({ name, children }) => {
  const [open, setState] = useState<boolean>(true);

  function toogleState() {
    const newState = !open;
    setState(newState);
  }
  return (
    <Li>
      <Row>
        <Puce />
        <div onClick={toogleState}>{name}</div>
      </Row>
      <Ul style={{ display: open ? 'block' : 'none' }}>{children}</Ul>
    </Li>
  );
};

export default Collapse;
