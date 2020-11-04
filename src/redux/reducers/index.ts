import { combineReducers } from 'redux';

import testItemReducer from './testitem';

const RootReducer =  combineReducers({
  people: testItemReducer
});

export default RootReducer
