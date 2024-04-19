import * as types from '../constants/ActionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
    console.log('Reducer action received:', action);
  
    switch (action.type) {
      case types.LOGIN_REQUEST:
        console.log('Login request started');
        return { ...state, loading: true };
      case types.LOGIN_SUCCESS:
        console.log('Login success:', action.payload);
        return { ...state, loading: false, user: action.payload, error: null };
      case types.LOGIN_FAILURE:
        console.log('Login failure:', action.payload);
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

export default authReducer;
