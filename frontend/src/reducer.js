import {
  LOAD_USERS,
  FETCH_USER,
  UPDATE_USER,
  GET_USER
} from './constants';

const initialState = {
  users: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.users,
        loaded: true
      };
    case FETCH_USER:
      return {
        ...state,
        users: action.users
      };
    case UPDATE_USER:
      return {
        ...state,
        users: action.users
      };
    case GET_USER:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};

export default reducer;
