import { useRouteMatch } from 'react-router';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes, { arrayOf, object } from 'prop-types';
import { Button } from 'antd';
import AddChannelForm from '../components/AddChannelForm';
import ChannelsList from '../components/ChannelsList';
import { getChannelsData } from '../redux/selector';
import { addChannel, fetchChannels, removeChannel } from '../redux/actions';
import controller from '../../../controller/TdLibController';

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
  const handle = () => {
    controller.clientUpdate({
      '@type': 'clientUpdateSetPhone',
      phone_number: '+375291430899',
    });
  };

  const handleRemove = (event, name) => {
    event.preventDefault();
    removeChannelData(name);
  };

  return (
    <div className="m-4">
      <Button onClick={handle}> Text </Button>
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
