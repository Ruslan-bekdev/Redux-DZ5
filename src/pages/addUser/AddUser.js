import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addUserAction} from "../../redux/actions";

const AddUser = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    email: '',
  })
  const changeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const registerUser = () => {
    dispatch(addUserAction(form));
  }
  return (
    <div>
      <h1>Register user</h1>
      <input type="text" placeholder='name' name='name' onChange={changeInput}/>
      <input type="text" placeholder='email' name='email' onChange={changeInput}/>
      <button onClick={registerUser}>add</button>
    </div>
  );
}

export default AddUser;