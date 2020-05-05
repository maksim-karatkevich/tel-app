import { combineReducers } from 'redux';
import channelsState from '../../features/Chanels/redux/reducers/channelsReducer';
import postsState from '../../features/Chanels/redux/reducers/postsReducer';
import alertState from './alertReducer';
import authorizationState from './authorizationReducer';
import filesState from '../../features/Chanels/redux/reducers/filesReducer';

export default combineReducers({
  channelsState,
  postsState,
  alertState,
  authorizationState,
  filesState,
});
