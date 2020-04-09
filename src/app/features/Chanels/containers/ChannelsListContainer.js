import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes, { arrayOf, object } from 'prop-types';
import AddChannelForm from '../components/AddChannelForm';
import ChannelsList from '../components/ChannelsList';
import { getChannelsData } from '../redux/selector';
import { fetchChannels } from '../redux/actions';

const ChannelsListContainer = ({ fetchData, channels }) => {
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="m-4">
      <AddChannelForm />
      <ChannelsList channels={channels} url={url} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  channels: getChannelsData(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchChannels()),
});

ChannelsListContainer.defaultProps = {
  channels: [],
};

ChannelsListContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  channels: arrayOf(object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsListContainer);