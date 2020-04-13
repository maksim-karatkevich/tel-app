import React, { useEffect } from 'react';
import PropTypes, { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { getPostsData } from '../redux/selector';
import Channel from '../components/Channel';

const ChannelPageContainer = ({ fetchPostsData, posts, match }) => {
  useEffect(() => {
    fetchPostsData(match.params.id);
  }, [fetchPostsData, posts, match]);
  return <Channel posts={posts} match={match} />;
};

const mapStateToProps = (state, props) => ({
  posts: getPostsData(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPostsData: () => dispatch(fetchPosts(props.match.params.id)),
});

ChannelPageContainer.propTypes = {
  fetchPostsData: PropTypes.func.isRequired,
  posts: arrayOf(object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

ChannelPageContainer.defaultProps = {
  posts: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelPageContainer);
