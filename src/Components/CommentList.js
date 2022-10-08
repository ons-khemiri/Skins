import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { getComments } from "../JS/Actions/comment";
import Comments from "./Comments";

const CommentList = () => {
  const dispatch = useDispatch();
  const listComments = useSelector((state) => state.commentReducer.listComments);
  const load = useSelector((state) => state.commentReducer.load);
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
return (
    <div>
      <br/>
<div >
        {load ? (
          <Spinner animation="grow" variant="secondary" />
        ) : (listComments.map((el) => <Comments comment={el} key={el._id}/>))}
      </div>
    </div>
  );
};

export default CommentList;