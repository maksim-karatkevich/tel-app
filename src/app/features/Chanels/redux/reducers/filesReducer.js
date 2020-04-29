import { GET_AVATARS } from '../actionsTypes';

const initialState = {};
const filesState = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVATARS: {
      return action.payload.reduce((acc, img) => {
        return { ...acc, [img.id]: img.avatar };
      }, {});
    }
    default:
      return state;
  }
};

export default filesState;
