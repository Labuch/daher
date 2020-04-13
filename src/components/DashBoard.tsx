import React from 'react';
import styled from 'styled-components';

import { Row } from '../Layout';
import avatar from '../assets/avatar.jpg'


const Dashboard = styled.div`
  flex:2 1 0;
  padding:10px;
  background-color: white;
  box-shadow: 3px 3px 3px #BDBDBD;
  margin-right:25px;
`;
export const Label = styled.label`
  font-family: serial;
  margin-right:10px;
  margin-left: 10px;
  color: #BDBDBD;
  text-align: end;
  align-self: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  height:1.5em;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);  
  }
`

export const Avatar = styled.img`
  margin: 10px;
  overflow:hidden;
  height: 100px;
  width: 100px;
  border-radius:50px;
`
export const Button = styled.button`
  outline: none;
  color: white;
  background-color: #BDBDBD;
  border-radius: 5px;
  width: 100px;
  height: 45px;
`
export const H3 = styled.h3`
  color: #BDBDBD;
`


function DashBoard() {
  return (
    <Dashboard>
      <Row>
        <Avatar src={avatar}></Avatar>
        <div>
          <Row style={{ padding: 2, }} >
            <Label style={{ flex: 1, }}>Nom:</Label>
            <Input type='text' value='Rousseau Martin' />
          </Row>
          <Row style={{ padding: 2, }}>
            <Label style={{ flex: 1, }}>Email:</Label>
            <Input type='text' value='mrousseau@gmail.com' />
          </Row>
          <Row style={{ padding: 2, }}>
            <Label style={{ flex: 1, }}>Telephone:</Label>
            <Input type='text' value='+33(0)6 98 98 98 98' />
          </Row>
          <Row style={{ padding: 2, }}>
            <Label style={{ flex: 1, }}>Matricule:</Label>
            <Input type='text' value='MC56564324' />
          </Row>
        </div>
      </Row>

      <H3>Moyen d'identification: </H3>
      <Row><Label style={{ flex: 0.3, }}>Email</Label><Button>associer</Button> </Row>
      <Row><Label style={{ flex: 0.3, }}>Telephone </Label><Button>associer</Button></Row>
      <Row><Label style={{ flex: 0.3, }}>Matricule</Label><Button>associer</Button> </Row>
      <Row><Label style={{ flex: 0.3, }}>Compte Google</Label><Button>associer</Button></Row>
      <H3>Voulez-vous vous désinscrire </H3>
    </Dashboard>

  );
}

export default DashBoard;