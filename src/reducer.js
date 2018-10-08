import { combineReducers } from 'redux';

import { reducer as app } from './App';
import { reducer as websocket } from './WebSocket/reducer';

const rootReducer = combineReducers({
  websocket,
  app
});

export default rootReducer;
