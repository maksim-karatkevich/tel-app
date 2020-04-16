import { ADD_CHANNEL, GET_CHANNELS } from '../actionsTypes';

const initialState = [];
const channelsState = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNELS: {
      return action.payload;
    }
    case ADD_CHANNEL: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default channelsState;
