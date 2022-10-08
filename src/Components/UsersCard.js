import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { deleteUser } from "../JS/Actions/admin";

const UsersCard=({user})=>{
const dispatch=useDispatch();
//const isAgent = useSelector((state) => state.agentReducer.isAgent);
const handleDelete = (e) => {
  e.preventDefault();
  dispatch(deleteUser(user._id));
};
  return (
    <header>
<Card style={{ width: '18rem' ,textAlign:"center",marginBottom:"20px"}}>
<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png" alt="profile"/>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.email}</Card.Text>
    <Card.Text>{user.phone}</Card.Text>
    <Button variant="danger" onClick={handleDelete}>Delete User</Button>
    </Card.Body>
    
</Card>
    </header>  
    )
}
export default UsersCard;