interface ProjectsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
  PROJECTS_CREATE = 'projects_create',
  PROJECTS_CREATE_SUCCESS = 'projects_create_success',
  PROJECTS_CREATE_FAILURE = 'projects_create_failure',
}

interface SearchProjectsAction {
  type: ActionType.PROJECTS_CREATE;
}

interface SearchProjectsSuccessAction {
  type: ActionType.PROJECTS_CREATE_SUCCESS;
  payload: string[];
}

interface SearchProjectsErrorAction {
  type: ActionType.PROJECTS_CREATE_FAILURE;
  payload: string;
}

type Action = SearchProjectsAction | SearchProjectsSuccessAction | SearchProjectsErrorAction;

const reducer = (state: ProjectsState, action: Action): ProjectsState => {
  switch (action.type) {
    case ActionType.PROJECTS_CREATE:
      return { loading: true, error: null, data: [] };
    case ActionType.PROJECTS_CREATE_SUCCESS:
      // 100% certain that 'action' is SearchProjectsSuccessAction
      return { loading: false, error: null, data: action.payload };
    case ActionType.PROJECTS_CREATE_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
