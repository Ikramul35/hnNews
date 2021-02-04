import { combineReducers } from 'redux';
import postReducer from './posts';
import queryReducer from './queries';

export default combineReducers({
    postReducer,
    queryReducer,
});
