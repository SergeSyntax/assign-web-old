import { combineReducers } from 'redux';
import alert from './alert/alert.reducer';
import auth from './auth/auth.reducer';

const rootReducer = combineReducers({ auth, alert });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
