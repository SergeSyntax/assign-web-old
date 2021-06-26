import { AnyAction, applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { RootState } from './root.reducer';
import rootSaga from './root.saga';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production')
    return composeWithDevTools(applyMiddleware(...middleware));

  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<RootState, AnyAction> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, {}, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });