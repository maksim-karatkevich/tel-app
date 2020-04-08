import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';

const ChannelItem = ({ name, src }) => {
  return (
    <div className="p-3">
      <Avatar size={256} src={src} />
      <div className="text-center">{name}</div>
    </div>
  );
};

ChannelItem.defaultProps = {
  src: '',
};

ChannelItem.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
};
export default ChannelItem;
