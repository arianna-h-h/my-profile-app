import {
  LOAD_USERS,
  UPDATE_USER,
  CREATE_USER
} from './constants';
import axios from 'axios';

const API = 'http://localhost:8080/api';

export function receiveUsers (users) {
  return {
    type: LOAD_USERS,
    users
  };
};

export function loadUsers () {
  return dispatch => {
    return axios.get(API)
      .then((res) => {
        dispatch(receiveUsers(res.data.data));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function getUser (user) {
  return {
    type: UPDATE_USER,
    user
  };
};

export function updateUser (id, newData) {
  return dispatch => {
    return axios.patch(`${API}/user/${id}`, newData)
      .then((res) => {
        if (res.data.success) {
          dispatch(getUser(res.data.data));
        }
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function makeUser (data) {
  return {
    type: CREATE_USER,
    user: data
  };
};

export function createUser (data) {
  return dispatch => {
    return axios.post(`${API}/user/`, data)
      .then((res) => {
        if (res.data.success) {
          dispatch(makeUser(res.data.data));
        }
      })
      .catch(error => {
        throw (error);
      });
  };
};
