import { GET_POSTS } from '../actionsTypes';

const initialState = {
  posts: [],
};

const postsState = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
};

export default postsState;
