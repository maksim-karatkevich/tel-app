import React from 'react';
import { Row, Col } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import ChannelItem from './ChannelItem';
import AddChannelForm from './AddChannelForm';

const mockData = [
  { name: 'Test1', img: 'http://i.pravatar.cc/300' },
  { name: 'Test2', img: 'http://i.pravatar.cc/300' },
  { name: 'Test3', img: 'http://i.pravatar.cc/300' },
  { name: 'Test4', img: 'http://i.pravatar.cc/300' },
  { name: 'Test5', img: 'http://i.pravatar.cc/300' },
  { name: 'Test6', img: 'http://i.pravatar.cc/300' },
  { name: 'Test7', img: 'http://i.pravatar.cc/300' },
  { name: 'Test8', img: 'http://i.pravatar.cc/300' },
  { name: 'Test9', img: 'http://i.pravatar.cc/300' },
  { name: 'Test0', img: 'http://i.pravatar.cc/300' },
];

const ChannelsList = () => {
  const { url } = useRouteMatch();

  return (
    <div className="m-4">
      <AddChannelForm />
      <Row>
        {mockData.map((item, index) => {
          return (
            <Link
              key={`${item}`}
              to={{ pathname: `${url}/${index}`, state: item }}
              name={item.name}
            >
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
