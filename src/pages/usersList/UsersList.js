import React, {useEffect, useState} from 'react';
import {getUsersAction, showUserInfoAction} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducer.users);
  useEffect(()=>{
    dispatch(getUsersAction());
  },[]);
  const showUserInfo = (user) => {
    dispatch(showUserInfoAction(user));
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(user =>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td onClick={()=>showUserInfo(user)}>
                <NavLink to={`/${user.id}`}>
                  show more
                </NavLink>
              </td>
            </tr>
          )
        }
      </tbody>
    </Table>
    </div>
  );
}

export default UsersList;