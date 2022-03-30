const initialState = {
  requests: [],
};

export const requestsLoading = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED": {
      const existingCall = state.requests.find(
        (request) => request.requestName === action.request.name
      );

      if (existingCall) {
        return {
          ...state,
          requests: state.requests.map((request) =>
            request.name === action.request.name
              ? { ...request, inProgress: true, error: null }
              : request
          ),
        };
      }

      return {
        ...state,
        requests: [...state.requests, action.request],
      };
    }
    case "REQUEST_FINISHED": {
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request.name !== action.request.name
        ),
      };
    }
    case "REQUEST_FAILED": {
      return {
        ...state,
        requests: state.requests.map((request) =>
          request.name === action.request.name
            ? {
                ...request,
                error: action.request.error,
                inProgress: false,
              }
            : request
        ),
      };
    }
    default: {
      return state;
    }
  }
};
