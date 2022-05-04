import { useEffect, useState } from 'react';
import { LoadingRequestInterface } from '../types/LoadingRequestInterface';

export function checkIfLoading(state: any, name: string) {
  const requestsInProgress: string[] = [];
  state.requests.map((request: LoadingRequestInterface) => {
    if (request.inProgress == true) {
      requestsInProgress.push(request.name);
    }
  });
  const res = () => {
    if (requestsInProgress.includes(name)) {
      return true;
    } else {
      return false;
    }
  };
  return res();
}

export default function useLoading(state: any, name: string) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(checkIfLoading(state, name));
  }, [state, loading, name]);

  return loading;
}
