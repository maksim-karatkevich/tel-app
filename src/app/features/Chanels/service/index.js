import { channelsMockData, postsMockData } from '../../../utils/mockData';

const requestChannels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(channelsMockData);
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

export { requestChannels, requestPosts };
