import { GET_CHANNELS, GET_POSTS, ADD_CHANNEL } from './actionsTypes';
import { createChannel, requestChannels, requestPosts } from '../service';
import { showErrorAlert, showSuccessAlert } from '../../../redux/alertActions';

export const addChannelAction = (channelName) => ({
  type: ADD_CHANNEL,
  payload: channelName,
});

export const getChannelsAction = (channels) => ({
  type: GET_CHANNELS,
  payload: channels,
});

export const getPostsAction = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

export function fetchChannels() {
  return async (dispatch, getState) => {
    const channelsExists = getState().channelsState.length > 0;
    if (!channelsExists) {
      const channels = await requestChannels();
      dispatch(getChannelsAction(channels));
    }
  };
}

export function fetchPosts(id) {
  return async (dispatch, getState) => {
    const postsExists = !!getState().postsState.find(
      (channel) => channel.channelId === id
    );

    if (!postsExists) {
      requestPosts(id).then((result) => {
        if (result) {
          dispatch(getPostsAction(result));
        }
      });
    }
  };
}

export function addChannel(channelName) {
  return async (dispatch, getState) => {
    const channelExists = getState().channelsState.find(
      (channel) => channel.name === channelName
    );

    if (!channelExists) {
      createChannel(channelName).then((result) => {
        dispatch(addChannelAction(result));
        dispatch(showSuccessAlert(`Channel ${channelName} added!`));
      });
    } else {
      dispatch(showErrorAlert(`Channel ${channelName} exists!`));
    }
  };
}

export function removeChannel(channelName) {
  return async (dispatch, getState) => {
    const newChannelsState = getState().channelsState.filter(
      (channel) => channel.name !== channelName
    );
    dispatch(getChannelsAction(newChannelsState));
    dispatch(showSuccessAlert(`Channel ${channelName} removed!`));
    localStorage.setItem('channelsList', JSON.stringify(newChannelsState));
  };
}
