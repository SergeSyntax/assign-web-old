import { AlertAction, AlertActionType, AlertState } from './alert.type';

const initialState: AlertState = {
  relevant: false,
  error: false,
  message: '',
};

export default (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case AlertActionType.ALERT_DISPLAY:
      return { ...state, relevant: true, error: false, message: action.payload };
    case AlertActionType.ALERT_DISPLAY_FAILURE:
      return { ...state, relevant: true, error: true, message: action.payload };
    case AlertActionType.ALERT_CLEAR:
      return { ...state, relevant: false, error: false, message: '' };
    default:
      return state;
  }
};
