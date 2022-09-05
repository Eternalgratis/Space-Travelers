import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './missions/Mission';
import dragonReducer from './dragons/dragons';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  Rockets: rocketReducer,
  missions: missionReducer,
  dragons: dragonReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
