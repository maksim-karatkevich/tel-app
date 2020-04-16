import { channelsMockData, postsMockData } from '../../../utils/mockData';

const requestChannels = async () => {
  return new Promise((resolve) => {
    const channels = localStorage.getItem('channelsList');
    if (channels) {
      resolve(JSON.parse(channels));
    }
    setTimeout(() => {
      resolve(channelsMockData);
      localStorage.setItem('channelsList', JSON.stringify(channelsMockData));
    }, 300);
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
    setTimeout(() => {
      console.log(id);
      const postItem = postsMockData.find((item) => item.channelId === id);

      resolve(postItem);
    }, 300);
  });
};

export { requestChannels, requestPosts, createChannel };
