import { combineReducers } from 'redux';
import channelsSlice from '../../features/Chanels/redux/reducers/channelsReducer';
import fileSlice from '../../features/Chanels/redux/reducers/filesReducer';
import postsSlice from '../../features/Chanels/redux/reducers/postsReducer';
import alertSlice from './alertReducer';
import authorizationSlice from './authorizationReducer';

export default combineReducers({
  channelsState: channelsSlice.reducer,
  postsState: postsSlice.reducer,
  alertState: alertSlice.reducer,
  authorizationState: authorizationSlice.reducer,
  filesState: fileSlice.reducer,
});
