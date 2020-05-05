import { postsMockData } from '../../../utils/mockData';
import controller from '../../../controller/TelegramController';
import readFile from '../../../utils/fileReader';

const getChat = async (channelId) => {
  return controller.send({
    '@type': 'getChat',
    chat_id: channelId,
  });
};

const readBlobFile = async (id) => {
  try {
    const result = await controller.send({
      '@type': 'readFile',
      file_id: id,
    });
    const blob = await readFile(result.data);
    return { id, avatar: blob.target.result };
  } catch (err) {
    console.error(err);
    return err;
  }
};

const downloadFile = async (channel) => {
  if (!channel.photo) {
    return '';
  }
  if (channel.photo.small.local.is_downloading_completed) {
    return channel.photo.small;
  }

  return controller.send({
    '@type': 'downloadFile',
    file_id: channel.photo.small.id,
    priority: 1,
  });
};

const getChannelAvatars = async (files) => {
  const promises = await files
    .filter((file) => file.local.is_downloading_completed)
    .map((file) => {
      return readBlobFile(file.id);
    });

  return Promise.all(promises);
};

const getChats = async () => {
  return controller.send({
    '@type': 'getChats',
    chat_list: { '@type': 'chatListMain' },
    offset_chat_id: 0,
    offset_order: '9223372036854775807',
    limit: 100,
  });
};

const downloadChatAvatars = async (channels) => {
  const promises = await channels.map((channel) => downloadFile(channel));

  return Promise.all(promises);
};

const createChannel = async (channelName) => {
  setTimeout(() => {
    return {
      id: `${channelName} - ${Math.random() * Math.floor(99999)}`,
      name: channelName,
      img: 'http://i.pravatar.cc/300',
    };
  }, 300);
};

const requestPosts = async (id) => {
  return postsMockData.find((item) => item.channelId === id);
};

export {
  downloadChatAvatars,
  getChats,
  getChat,
  requestPosts,
  createChannel,
  getChannelAvatars,
};
