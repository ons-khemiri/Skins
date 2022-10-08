import React from "react";
import {  Card } from "react-bootstrap";
import { useSelector } from "react-redux";



const Profile=()=> {
const user=useSelector((state)=>state.userReducer.user);
const isAuth = useSelector((state) => state.userReducer.isAuth);
return (
  <div>
  {isAuth ? (
  <div className="profile">
  <div>
 <br/>
 <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" />
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <Card.Text><span className="forms">Name :</span> {user && user.name}</Card.Text>
        <Card.Text><span className="forms">Email :</span> {user && user.email}</Card.Text>
        <Card.Text><span className="forms">Phone :</span> {user && user.phone}</Card.Text>
      </Card.Body>
    </Card>
  </div>
  </div>
  ) : null}
  </div>
  );
};

export default Profile;