import { combineReducers } from 'redux';
import channelsState from '../../features/Chanels/redux/reducers/channelsReducer';
import postsState from '../../features/Chanels/redux/reducers/postsReducer';
import alertState from './alertReducer';

export default combineReducers({ channelsState, postsState, alertState });
