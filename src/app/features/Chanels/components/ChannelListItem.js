import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const ChannelListItem = ({ name, src, onRemoveChannel }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="p-3"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {visible && (
        <Button
          type="link"
          className="position-absolute"
          onClick={(e) => onRemoveChannel(e, name)}
          icon={<CloseOutlined />}
          size="small"
          danger
        />
      )}
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
  onRemoveChannel: PropTypes.func.isRequired,
};
export default ChannelListItem;
