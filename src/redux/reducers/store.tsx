import { applyMiddleware, createStore, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import AppReducer from './index';
import ReduxThunk from 'redux-thunk';

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
  ),
];




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ["User"]
};

const persistedReducer = persistReducer(persistConfig, AppReducer);
export const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
