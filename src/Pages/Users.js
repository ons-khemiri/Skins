import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersCard from "../Components/UsersCard";
import { getUsers } from "../JS/Actions/admin";

const Users = () => {
  const dispatch = useDispatch();
  const listusers = useSelector((state) => state.adminReducer.listusers);
   useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
 return (
    <header>
      <br/>
      <div className="Userlist" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {listusers.map((el) => (
          <UsersCard user={el} key={el.id} />
        ))}  
      </div>
    </header>
  );
};

export default Users;