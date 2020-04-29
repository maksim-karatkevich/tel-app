import { postsMockData } from '../../../utils/mockData';
import controller from '../../../controller/TelegramController';

const getChat = async (channelId) => {
  return new Promise((resolve) => {
    controller
      .send({
        '@type': 'getChat',
        chat_id: channelId,
      })
      .then((result) => {
        resolve(result);
      });
  });
};

const readBlobFile = async (id) => {
  return new Promise((resolve) => {
    controller
      .send({
        '@type': 'readFile',
        file_id: id,
      })
      .then((result) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(result.data);
        fileReader.onload = (blob) => {
          resolve({ id, avatar: blob.target.result });
        };
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const downloadFile = async (channel) => {
  return new Promise((resolve) => {
    if (!channel.photo) {
      resolve();
    }
    if (channel.photo.small.local.is_downloading_completed) {
      resolve(channel.photo.small);
    } else {
      controller
        .send({
          '@type': 'downloadFile',
          file_id: channel.photo.small.id,
          priority: 1,
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

const getChannelAvatars = async (files) => {
  return new Promise((resolve) => {
    const promises = files
      .filter((file) => file.local.is_downloading_completed)
      .map((file) => {
        return readBlobFile(file.id);
      });

    Promise.all(promises).then((result) => {
      resolve(result);
    });
  });
};

const getChats = async () => {
  return new Promise((resolve) => {
    controller
      .send({
        '@type': 'getChats',
        chat_list: { '@type': 'chatListMain' },
        offset_chat_id: 0,
        offset_order: '9223372036854775807',
        limit: 100,
      })
      .then((res) => {
        const promises = res.chat_ids.map((id) => getChat(id));
        Promise.all(promises).then((values) => {
          resolve(values);
        });
      });
  });
};

const downloadChatAvatar = async (channels) => {
  return new Promise((resolve) => {
    const promises = channels.map((channel) => downloadFile(channel));
    Promise.all(promises)
      .then((values) => {
        resolve(values);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

const createChannel = async (channelName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = {
        id: `${channelName} - ${Math.random() * Math.floor(99999)}`,
        name: channelName,
        img: 'http://i.pravatar.cc/300',
      };
      const updatedChannelsList = [
        ...JSON.parse(localStorage.getItem('channelsList')),
        result,
      ];
      localStorage.setItem('channelsList', JSON.stringify(updatedChannelsList));

      resolve(result);
    }, 300);
  });
};

const requestPosts = async (id) => {
  return new Promise((resolve) => {
    const postItem = postsMockData.find((item) => item.channelId === id);
    resolve(postItem);
  });
};

export {
  downloadChatAvatar,
  getChats,
  requestPosts,
  createChannel,
  getChannelAvatars,
};
