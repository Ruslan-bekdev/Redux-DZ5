import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import c from './userInfo.module.css';

const UserInfo = () => {
  const user = useSelector(state => state.usersReducer.user);
  useEffect(()=>{
    console.log(user.address);
  },[])
  return (
    user.name?<div>
      <h1>More info about: <br/> {user.name}</h1>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <details>
        <summary>address</summary>
        <p className={c.child_key}>street: {user.address.street}</p>
        <p className={c.child_key}>suite: {user.address.suite}</p>
        <p className={c.child_key}>city: {user.address.city}</p>
      </details>
      <p>phone: {user.phone}</p>
      <p>website: {user.website}</p>
      <details>
        <summary>company</summary>
        <p className={c.child_key}>name: {user.company.name}</p>
        <p className={c.child_key}>catchPhrase: {user.company.catchPhrase}</p>
        <p className={c.child_key}>bs: {user.company.bs}</p>
      </details>
    </div>:null
  );
}

export default UserInfo;