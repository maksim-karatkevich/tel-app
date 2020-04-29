import { useRouteMatch } from 'react-router';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes, { arrayOf, object } from 'prop-types';
import AddChannelForm from '../components/AddChannelForm';
import ChannelsList from '../components/ChannelsList';
import { getChannelsData, getAvatarData } from '../redux/selector';
import { addChannel, fetchChannels, removeChannel } from '../redux/actions';

const ChannelsListContainer = ({
  fetchData,
  addChannelData,
  removeChannelData,
  channels,
  avatars,
}) => {
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = (event) => {
    addChannelData(event.channelName);
  };

  const handleRemove = (event, name) => {
    event.preventDefault();
    removeChannelData(name);
  };

  return (
    <div className="m-4">
      <AddChannelForm onSubmitForm={handleSubmit} />
      <ChannelsList
        onRemoveChannel={handleRemove}
        channels={channels}
        url={url}
        avatars={avatars}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  channels: getChannelsData(state),
  avatars: getAvatarData(state),
});

const mapDispatchToProps = {
  fetchData: fetchChannels,
  removeChannelData: removeChannel,
  addChannelData: addChannel,
};

ChannelsListContainer.defaultProps = {
  channels: [],
  avatars: {},
};

ChannelsListContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  addChannelData: PropTypes.func.isRequired,
  removeChannelData: PropTypes.func.isRequired,
  channels: arrayOf(object),
  avatars: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsListContainer);
