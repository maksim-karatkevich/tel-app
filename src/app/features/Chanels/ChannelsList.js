import React from 'react';
import { Col, Row } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import AddChannelForm from './AddChannelForm';
import ChannelItem from './ChannelItem';
import { channels } from '../../utils/mockData';

const ChannelsList = () => {
  const { url } = useRouteMatch();
  return (
    <div className="m-4">
      <AddChannelForm />
      <Row>
        {channels.map((item, index) => {
          return (
            <Link key={`${item.name}`} to={`${url}/${index}`} name={item.name}>
              <Col>
                <ChannelItem name={item.name} src={item.img} />
              </Col>
            </Link>
          );
        })}
      </Row>
    </div>
  );
};

export default ChannelsList;
