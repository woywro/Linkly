import { useEffect, useState } from "react";

export function checkIfLoading(state) {
  //   const requestsInProgress = [];
  //   const result = state.requests.map((request) => {
  //     if (request.inProgress == true) {
  //       requestsInProgress.push(request.requestName);
  //     }
  //   });
  const res = () => {
    if (state.requests.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  return res();
  // if (state.requests.length > 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

export default function useLoadingGlobal(state) {
  const [loadingGlobal, setLoadingGlobal] = useState(true);

  useEffect(() => {
    // setLoadingGlobal(checkIfLoading(state));
    setLoadingGlobal(
      state.requests.filter((request) => request.inProgress).length > 0
    );
  }, [state, loadingGlobal]);

  return loadingGlobal;
}
