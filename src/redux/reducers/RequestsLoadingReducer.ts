import { AnyAction } from 'redux';
import { LoadingRequestInterface } from '../../types/LoadingRequestInterface';

const initialState = {
  requests: [],
};

export const requestsLoading = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'REQUEST_STARTED': {
      return {
        requests: [...state.requests, action.request],
      };
    }
    case 'REQUEST_FINISHED': {
      return {
        requests: state.requests.filter(
          (request: LoadingRequestInterface) =>
            request.name !== action.request.name
        ),
      };
    }
    default: {
      return state;
    }
  }
};
