import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/videos';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: []
// });

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

// export default store;
export { store, persistor };
