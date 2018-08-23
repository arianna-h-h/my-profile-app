import {
  LOAD_USERS,
  CREATE_USER,
  UPDATE_USER
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
    case CREATE_USER:
      const addedUsers = { ...state.users.concat(action.user) };
      console.log(addedUsers)
      return {
        ...state,
        users: addedUsers,
        loaded: true
      };

    case UPDATE_USER:
      const newUsers = { ...state.users[action.user.id] = action.user };
      return {
        ...state,
        users: newUsers,
        loaded: true
      };
    default:
      return state;
  }
};

export default reducer;
