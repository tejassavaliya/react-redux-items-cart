import itemsReducer from './itemsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    data: itemsReducer
});

export default allReducers;