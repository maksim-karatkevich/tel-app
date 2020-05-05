import {
  createChannel,
  downloadChatAvatars,
  getChannelAvatars,
  getChat,
  getChats,
  requestPosts,
} from '../service';
import { showErrorAlert, showSuccessAlert } from '../../../redux/alertActions';
import channelsSlice from './reducers/channelsReducer';
import fileSlice from './reducers/filesReducer';
import postsSlice from './reducers/postsReducer';

export function requestPhotos(channels) {
  return async (dispatch) => {
    const photos = await getChannelAvatars(channels);

    dispatch(fileSlice.actions.GET_AVATARS(photos));
  };
}

export function fetchChannels() {
  return async (dispatch) => {
    const chats = await getChats();
    const channels = await Promise.all(chats.chat_ids.map((id) => getChat(id)));
    const files = await downloadChatAvatars(
      channels.filter((channel) => channel.photo)
    );
    dispatch(channelsSlice.actions.GET_CHANNELS(channels));
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
        dispatch(postsSlice.actions.GET_POSTS(result));
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

      dispatch(channelsSlice.actions.ADD_CHANNEL(channel));
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
    dispatch(channelsSlice.actions.ADD_CHANNEL(newChannelsState));
    dispatch(showSuccessAlert(`Channel ${channelName} removed!`));
    localStorage.setItem('channelsList', JSON.stringify(newChannelsState));
  };
}
