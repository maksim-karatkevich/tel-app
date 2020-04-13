import { GET_POSTS } from '../actionsTypes';

const initialState = [];

const postsState = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default postsState;
