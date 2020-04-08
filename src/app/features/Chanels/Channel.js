import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Card, Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar';
import { posts } from '../../utils/mockData';
import Post from './Post';

const Channel = ({ match }) => {
  return (
    <div className="mt-3">
      <Row justify="center" align="middle">
        <Col span={12}>
          <Card
            title={`Channel ${match.params.id}`}
            style={{ background: 'rgb(249, 249, 249)' }}
            extra={<Avatar size="large" src="http://i.pravatar.cc/300" />}
          >
            Lorem Ipsum is simply dummy text of the printing
          </Card>
        </Col>
      </Row>
      <Row className="mt-3" justify="center" align="middle">
        <Col span={12}>
          {posts.map((post) => (
            <Post key={post.id} content={post.value} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

Channel.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(Channel);
