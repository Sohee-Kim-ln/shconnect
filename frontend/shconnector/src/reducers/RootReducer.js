import { combineReducers } from '@reduxjs/toolkit';
import TestSlice from './TestSlice';
import CalendarSlice from './CalendarSlice';
import LoginSlice from './LoginSlice';
import FriendSlice from './FriendSlice';
import AccountSlice from './AccountSlice';

const rootReducer = combineReducers({
  test: TestSlice.reducer,
  calendar: CalendarSlice.reducer,
  account:AccountSlice.reducer,
  login: LoginSlice.reducer,
  friend: FriendSlice.reducer,
});

export default rootReducer;
