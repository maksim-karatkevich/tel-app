export const getChannelsData = (store) => store.channelsState.channels;
export const getPostsData = (store, id) => {
  const channelItem = store.postsState.channels.find(
    (channel) => channel.channelId === id
  );
  return channelItem ? channelItem.posts : [];
};
