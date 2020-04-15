import { useRouteMatch } from 'react-router';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes, { arrayOf, object } from 'prop-types';
import AddChannelForm from '../components/AddChannelForm';
import ChannelsList from '../components/ChannelsList';
import { getChannelsData } from '../redux/selector';
import { addChannel, fetchChannels, removeChannel } from '../redux/actions';

const ChannelsListContainer = ({
  fetchData,
  addChannelData,
  removeChannelData,
  channels,
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
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  channels: getChannelsData(state),
});

const mapDispatchToProps = {
  fetchData: fetchChannels,
  removeChannelData: removeChannel,
  addChannelData: addChannel,
};

ChannelsListContainer.defaultProps = {
  channels: [],
};

ChannelsListContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  addChannelData: PropTypes.func.isRequired,
  removeChannelData: PropTypes.func.isRequired,
  channels: arrayOf(object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsListContainer);
