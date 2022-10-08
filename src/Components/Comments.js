import React, { useEffect, useState } from 'react';
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin6Line} from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { deleteComment, editComment, getComments } from '../JS/Actions/comment';

const Comments=({comment})=>{
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteComment(comment._id));
      };
      const [newComment, setnewComment] = useState();
      const match = useMatch("/edit/:id");
      const navigate = useNavigate();
      const handleChange=(e)=>{
        setnewComment({...newComment,[e.target.name]:e.target.value})
    }
   
    useEffect(() => {
      dispatch(getComments(match.params.id))
  })
  const handleEdit = () => {
    dispatch(editComment(match.params.id, newComment));
    navigate(-1);
  }
    return(
        <header>
<div style={{display:"flex",}}> 
<img style={{width:"40px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png" alt="profile"/>
<p style={{margin:"8px",}}>{comment.UserName}</p>
</div>
<div style={{display:"flex"}}>
<h6 style={{marginLeft:"40px",}} onChange={handleChange} > {comment.description}</h6> <br/>
<FaRegEdit style={{marginLeft:"100px",marginRight:"10px"}} onClick={handleEdit}/> 
        <RiDeleteBin6Line onClick={handleDelete}/>
        </div>
        </header>
    )
};

export default Comments;