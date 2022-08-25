import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersCard from "../Components/UsersCard";
import { getUsers } from "../JS/Actions/admin";

const UserList = () => {
  const dispatch = useDispatch();
  const listusers = useSelector((state) => state.adminReducer.listusers);
   useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
 return (
    <div>
      <div>
        <title>Users</title>
        </div>
      <h1 className="Profile">Users List</h1>
      <div className="Userlist">
        {listusers.map((el) => (
          <UsersCard user={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;