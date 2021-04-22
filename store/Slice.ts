import { Action } from 'redux';

const appName = 'assign';

export abstract class Slice<S> {
  LOAD: string;
  CREATE: string;
  UPDATE: string;
  REMOVE: string;
  constructor(widget: string) {
    this.LOAD = `${appName}/${widget}/LOAD`;
    this.CREATE = `${appName}/${widget}/CREATE`;
    this.UPDATE = `${appName}/${widget}/UPDATE`;
    this.REMOVE = `${appName}/${widget}/REMOVE`;
  }

  abstract reducer(state: S, action: Action): S;
  abstract saga(): Generator[];
  abstract actions(): unknown;
}
