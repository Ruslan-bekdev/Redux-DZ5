import {types} from "../types";

const initialState = {
  users: [],
  user: {},
}

export const usersReducer = (state = initialState,action) => {
  switch (action.type) {
    case types.USERS_INFO:
      return {...state, users:action.payload};
    case types.SHOW_USER_INFO:
      return {...state, user:action.payload};
    default:return state;
  }
}