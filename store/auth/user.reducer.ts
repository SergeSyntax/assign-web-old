import { UserAction, UserActionType, UserData, UsersState } from './auth.type';

const data: UserData = { id: '', name: '', email: '' };

const initialState: UsersState = {
  data,
  loading: false,
  error: null,
  auth: null,
};

const userReducer = (state = initialState, action: UserAction): UsersState => {
  switch (action.type) {
    case UserActionType.AUTH_REGISTRATION:
    case UserActionType.AUTH_LOGIN:
      return { loading: true, error: null, auth: null, data };
    case UserActionType.AUTH_SUCCESS:
      return { loading: false, error: null, auth: null, data: action.payload };
    case UserActionType.AUTH_FAILURE:
      return { loading: false, auth: null, error: action.payload, data };
    default:
      return state;
  }
};

export default userReducer;
