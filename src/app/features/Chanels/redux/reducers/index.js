import { GET_CHANNELS, GET_POSTS } from '../actionsTypes';

const initialState = {
  channels: [],
  posts: [],
};

const channelsState = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_CHANNELS: {
      return {
        ...state,
        channels: action.payload,
      };
    }
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

export default channelsState;
