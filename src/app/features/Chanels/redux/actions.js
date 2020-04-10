import { GET_CHANNELS, GET_POSTS } from './actionsTypes';
import { requestChannels, requestPosts } from '../service';

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
    requestChannels().then((result) => {
      console.log(1);
      dispatch(getChannels(result));
    });
  };
}

export function fetchPosts(id) {
  return async (dispatch) => {
    requestPosts(id).then((result) => {
      const postItem = result.find((item) => item.channelId === id);
      console.log(2);
      dispatch(getPosts(postItem ? postItem.posts : []));
    });
  };
}
