import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducers/todoListReducer';

const store = configureStore({
  reducer: rootReducers,
});
export default store;
