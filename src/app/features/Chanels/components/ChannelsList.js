import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes, { arrayOf, object } from 'prop-types';
import ChannelListItem from './ChannelListItem';

const ChannelsList = ({ channels, url }) => {
  return (
    <Row>
      {channels.map((item, index) => {
        return (
          <Link key={`${item.name}`} to={`${url}/${index}`} name={item.name}>
            <Col>
              <ChannelListItem name={item.name} src={item.img} />
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
};

export default ChannelsList;
