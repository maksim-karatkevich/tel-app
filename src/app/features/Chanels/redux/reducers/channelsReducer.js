import { GET_CHANNELS } from '../actionsTypes';

const initialState = {
  channels: [],
};

const channelsState = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNELS: {
      return {
        ...state,
        channels: action.payload,
      };
    }
    default:
      return state;
  }
};

export default channelsState;
