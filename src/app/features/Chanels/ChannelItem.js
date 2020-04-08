import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';

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
