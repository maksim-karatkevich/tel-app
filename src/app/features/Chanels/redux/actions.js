import {
  GET_CHANNELS,
  GET_POSTS,
  ADD_CHANNEL,
  GET_AVATARS,
} from './actionsTypes';
import {
  createChannel,
  downloadChatAvatars,
  getChannelAvatars,
  getChat,
  getChats,
  requestPosts,
} from '../service';
import { showErrorAlert, showSuccessAlert } from '../../../redux/alertActions';

export const addChannelAction = (channelName) => ({
  type: ADD_CHANNEL,
  payload: channelName,
});

export const getChannelsAction = (channels) => ({
  type: GET_CHANNELS,
  payload: channels,
});

export const getAvatarAction = (files) => ({
  type: GET_AVATARS,
  payload: files,
});

export const getPostsAction = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

export function requestPhotos(channels) {
  return async (dispatch) => {
    const photos = await getChannelAvatars(channels);

    dispatch(getAvatarAction(photos));
  };
}

export function fetchChannels() {
  return async (dispatch) => {
    const chats = await getChats();
    const channels = await Promise.all(chats.chat_ids.map((id) => getChat(id)));
    const files = await downloadChatAvatars(
      channels.filter((channel) => channel.photo)
    );
    dispatch(getChannelsAction(channels));
    dispatch(requestPhotos(files));
  };
}

export function fetchPosts(id) {
  return async (dispatch, getState) => {
    const postsExists = !!getState().postsState.find(
      (channel) => channel.channelId === id
    );

    if (!postsExists) {
      const result = await requestPosts(id);
      if (result) {
        dispatch(getPostsAction(result));
      }
    }
  };
}

export function addChannel(channelName) {
  return async (dispatch, getState) => {
    const channelExists = getState().channelsState.find(
      (channel) => channel.name === channelName
    );

    if (!channelExists) {
      const channel = await createChannel(channelName);

      dispatch(addChannelAction(channel));
      dispatch(showSuccessAlert(`Channel ${channelName} added!`));
    } else {
      dispatch(showErrorAlert(`Channel ${channelName} exists!`));
    }
  };
}

export function removeChannel(channelName) {
  return (dispatch, getState) => {
    const newChannelsState = getState().channelsState.filter(
      (channel) => channel.name !== channelName
    );
    dispatch(getChannelsAction(newChannelsState));
    dispatch(showSuccessAlert(`Channel ${channelName} removed!`));
    localStorage.setItem('channelsList', JSON.stringify(newChannelsState));
  };
}
