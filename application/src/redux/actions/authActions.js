import * as types from '../constants/ActionTypes';
import data from '../../data/data.json';

export const loginRequest = (credentials) => (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = data.users.find(u => u.username === credentials.username && u.password === credentials.password);
    
        if (user) {
          dispatch(loginSuccess(user));
          resolve(user);
        } else {
          dispatch(loginFailure('Invalid username or password'));
          reject('Invalid username or password');
        }
      }, 1000); 
    });
  };
  

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});


