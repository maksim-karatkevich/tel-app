import { channelsMockData, postsMockData } from '../../../utils/mockData';

const requestChannels = async () => {
  // eslint-disable-next-line no-return-await
  return await channelsMockData;
};

const requestPosts = async (id) => {
  console.log(id);
  // eslint-disable-next-line no-return-await
  return await postsMockData;
};

export { requestChannels, requestPosts };
