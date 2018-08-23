import {
  LOAD_USERS,
  FETCH_USER,
  UPDATE_USER,
  GET_USER
} from './constants';
import axios from 'axios';

const API = 'http://localhost:8080/api/';

export function receiveUsers (users) {
  return {
    type: LOAD_USERS,
    users
  };
}

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
}

//   dispatch(requestPosts(subreddit))
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(subreddit, json)))
//
// return (dispatch) => {
//    return axios.post(`${apiUrl}/add`, {title, body})
//      .then(response => {
//        dispatch(createPostSuccess(response.data))
//      })
//      .catch(error => {
//        throw(error);
//      });
//  };

// export function findClosest (zip, responses) {
//   return {
//     type: FIND_CLOSEST,
//     zip,
//     responses
//   };
// }
//
// export function toggleMap () {
//   return {
//     type: TOGGLE_MAP
//   };
// }
//
// export function showImage () {
//   return {
//     type: SHOW_IMAGE
//   };
// }
