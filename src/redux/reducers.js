/**
 * Created by zhuyu on 2018/3/8.
 */
import { combineReducers } from 'redux';

// Reducers
import planlist from './planlist';

// Combine Reducers
var reducers = combineReducers({
    planlist: planlist
});

export default reducers;
