import { configureStore } from '@reduxjs/toolkit';

import tweetsReducer from './slices/tweets.slice';
import authReducer from './slices/auth.slice';
import errorRedcer from './slices/error.slice';

const store = configureStore({
  reducer: { tweets: tweetsReducer, auth: authReducer, error: errorRedcer },
});

export default store;
