import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const Post = ({ content }) => {
  return <Card className="mt-3">{content}</Card>;
};

Post.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Post;
