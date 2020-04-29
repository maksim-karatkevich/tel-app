import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes, { arrayOf, object } from 'prop-types';
import get from 'lodash/get';
import ChannelListItem from './ChannelListItem';

const ChannelsList = ({ channels, url, onRemoveChannel, avatars }) => {
  return (
    <Row className="mt-3">
      {channels.map((item, index) => {
        return (
          <Link key={item.id} to={`${url}/${index}`} name={item.title}>
            <Col>
              <ChannelListItem
                onRemoveChannel={onRemoveChannel}
                name={item.title}
                src={avatars[get(item, ['photo', 'small', 'id'])]}
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
  avatars: {},
};

ChannelsList.propTypes = {
  channels: arrayOf(object),
  url: PropTypes.string.isRequired,
  onRemoveChannel: PropTypes.func.isRequired,
  avatars: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default ChannelsList;
