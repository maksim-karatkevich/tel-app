import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes, { arrayOf, object } from 'prop-types';
import ChannelListItem from './ChannelListItem';

const ChannelsList = ({ channels, url, onRemoveChannel }) => {
  return (
    <Row className="mt-3">
      {channels.map((item, index) => {
        return (
          <Link
            key={`${item.name} - ${Math.random() * Math.floor(99999)}`}
            to={`${url}/${index}`}
            name={item.name}
          >
            <Col>
              <ChannelListItem
                onRemoveChannel={onRemoveChannel}
                name={item.name}
                src={item.img}
              />
            </Col>
          </Link>
        );
      })}
    </Row>
  );
};

ChannelsList.defaultProps = {
  channels: [],
};

ChannelsList.propTypes = {
  channels: arrayOf(object),
  url: PropTypes.string.isRequired,
  onRemoveChannel: PropTypes.func.isRequired,
};

export default ChannelsList;
