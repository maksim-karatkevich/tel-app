export const getChannelsData = (store) => store.channelsState;
export const getAvatarData = (store) => store.filesState;
export const getPostsData = (store, id) => {
  const channelItem = store.postsState.find(
    (channel) => channel.channelId === id
  );
  return channelItem ? channelItem.posts : [];
};
