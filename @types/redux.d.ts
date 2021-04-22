import { Task } from '@redux-saga/types';
import { Store as ReduxStore } from 'redux';

declare module 'redux' {
  export interface Store extends ReduxStore {
    sagaTask: Task;
  }
}
