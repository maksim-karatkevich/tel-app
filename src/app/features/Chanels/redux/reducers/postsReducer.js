import { GET_POSTS } from '../actionsTypes';

const initialState = {
  channels: [],
};

const postsState = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, channels: [...state.channels, action.payload] };
    }
    default:
      return state;
  }
};

export default postsState;
