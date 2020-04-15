import { channelsMockData, postsMockData } from '../../../utils/mockData';

const requestChannels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(channelsMockData);
    }, 300);
  });
};

const requestChannel = async (channelName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `${channelName} - ${Math.random() * Math.floor(99999)}`,
        name: channelName,
        img: 'http://i.pravatar.cc/300',
      });
    }, 300);
  });
};

const requestPosts = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(id);
      resolve(postsMockData);
    }, 300);
  });
};

export { requestChannels, requestPosts, requestChannel };
