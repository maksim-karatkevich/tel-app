import { GET_CHANNELS, GET_POSTS } from './actionsTypes';
import { channelsMockData, postsMockData } from '../../../utils/mockData';

export const getChannels = (channels) => ({
  type: GET_CHANNELS,
  payload: channels,
});

export const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

export function fetchChannels() {
  return async (dispatch) => {
    try {
      dispatch(getChannels(channelsMockData));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    try {
      dispatch(getPosts(postsMockData));
    } catch (error) {
      console.error(error);
    }
  };
}
