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
  return async (dispatch, getState) => {
    const channelsExists = getState().channelsState.channels.length > 0;

    if (!channelsExists) {
      requestChannels().then((result) => {
        dispatch(getChannels(result));
      });
    }
  };
}

export function fetchPosts(id) {
  return async (dispatch, getState) => {
    const postsExists = !!getState().postsState.channels.find(
      (channel) => channel.channelId === id
    );

    if (!postsExists) {
      requestPosts(id).then((result) => {
        const postItem = result.find((item) => item.channelId === id);
        if (postItem) {
          dispatch(getPosts(postItem));
        }
      });
    }
  };
}
