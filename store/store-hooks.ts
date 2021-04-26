import { TypedUseSelectorHook, useDispatch, useSelector as _useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './root.actions';
import { RootState } from './root.reducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
