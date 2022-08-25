import React from 'react';
import { Card } from 'react-bootstrap';


const UsersCard = ({user}) => {
 return (
    <div> 
         <div align='center' className='UserCard'>
      <Card style={{ width: '14rem' }} >
      <Card.Img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png" alt="profil"/>
      <Card.Body>
      <Card.Title>Profil</Card.Title>
      <Card.Text>
    <span  className='forms'>Name :</span>  {user.name} 
    </Card.Text>
    <Card.Text>
    <span  className='forms'>E-mail :</span> {user.email} 
    </Card.Text>
    <Card.Text>
    <span  className='forms'>Phone :</span>  {user.phone} 
    </Card.Text>    
    </Card.Body>
</Card>
</div>
</div>
  )};

export default UsersCard;