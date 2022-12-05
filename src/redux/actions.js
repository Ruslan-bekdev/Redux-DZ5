import {types} from "./types";

const usersInfoAction = (data) => {
  return{
    type:types.USERS_INFO,
    payload:data,
  }
}


export const getUsersAction = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    dispatch(usersInfoAction(data));
  }
}

export const showUserInfoAction = (user) => {
  return{
    type:types.SHOW_USER_INFO,
    payload:user,
  }
}

export const addUserAction = (data) => {
  return async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    fetch('https://jsonplaceholder.typicode.com/users',options)
      .then(response => response.status === 201
        ?alert('User registered')
        :alert('Error'))
  }
}