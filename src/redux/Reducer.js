import axios from 'axios';

const initState = {
  user: 'Sign In',
  updateModal: null,
};
const rootReducer = (state = initState, action) => {
  if (action.type === 'VALID_USER') {
    return {
      ...state,
      user: action.value,
    };
  } else if (action.type === 'UPDATE_MODAL') {
    return {
      ...state,
      updateModal: action.value,
    };
  } else if (action.type === 'LOGOUT_ME') {
    return {
      ...state,
      user: action.value,
    };
  }
  return state;
};

export default rootReducer;
