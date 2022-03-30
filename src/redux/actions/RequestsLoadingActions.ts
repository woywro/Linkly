export const requestStarted = (requestName: string) => ({
  type: "REQUEST_STARTED",
  request: {
    requestName,
    inProgress: true,
  },
});

export const requestFinished = (requestName: string) => ({
  type: "REQUEST_FINISHED",
  request: {
    requestName,
    inProgress: false,
  },
});
