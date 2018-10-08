import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducer';

export default initialState => {
  const store = createStore(
    rootReducer,
      initialState,
//      compose(
//          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
          applyMiddleware(thunk)
//      )
  );

  if(module.hot){
    module.hot.accept('./', () => {
      store.replaceReducer(require('./reducer').default)
    });
  }
  
  return store;
};
