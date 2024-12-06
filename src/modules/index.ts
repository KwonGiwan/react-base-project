import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { login, getLoginSaga } from 'modules/Login';
import { modal } from 'modules/Modal';
import { all } from 'redux-saga/effects';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const rootReducer = combineReducers({
  login,
  modal,
});

function* rootSaga() {
  yield all([getLoginSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === 'development'
      ? getDefaultMiddleware().concat(sagaMiddleware, logger)
      : getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;
