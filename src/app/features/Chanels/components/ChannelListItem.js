import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';

const ChannelListItem = ({ name, src }) => {
  return (
    <div className="p-3">
      <Avatar size={256} src={src} />
      <div className="text-center">{name}</div>
    </div>
  );
};

ChannelListItem.defaultProps = {
  src: '',
};

ChannelListItem.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
};
export default ChannelListItem;
