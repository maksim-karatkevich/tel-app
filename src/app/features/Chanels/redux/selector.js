export const getChannelsData = (store) => store.channelsState;
export const getPostsData = (store, id) => {
  const channelItem = store.postsState.find(
    (channel) => channel.channelId === id
  );
  return channelItem ? channelItem.posts : [];
};
export const getAlertState = (store) => store.alertState;
