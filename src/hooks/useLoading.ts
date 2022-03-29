import { useEffect, useState } from "react";

export function checkIfLoading(state, requestName) {
  const requestsInProgress = [];
  const result = state.requests.map((request) => {
    if (request.inProgress == true) {
      requestsInProgress.push(request.requestName);
    }
  });
  const res = () => {
    if (requestsInProgress.includes(requestName)) {
      return true;
    } else {
      return false;
    }
  };
  return res();
}

export default function useLoading(state, requestName) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(checkIfLoading(state, requestName));
  }, [state, loading, requestName]);

  return loading;
}
