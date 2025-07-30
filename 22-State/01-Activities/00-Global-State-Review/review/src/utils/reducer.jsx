import { LOGIN, LOGOUT } from "./actions";

const reducer = (state, action) => {
  // reducers always return state
  switch (action.type){
    case LOGIN: 
      return {
        ...state, // copy the original state
        username: action.payload // fill in the username
      }
    case LOGOUT: 
      return {
        ...state, // copy the original state
        username: '' // empty out the username
      }
    default:
      return state;
  }
};

export default reducer;