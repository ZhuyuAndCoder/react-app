/**
 * Created by zhuyu on 2018/3/8.
 */
import { createStore } from 'redux';
import reducers from './reducers.js';

const store = createStore(reducers);

export default store;
