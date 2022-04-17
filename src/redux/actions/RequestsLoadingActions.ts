export const requestStarted = (name: string) => ({
  type: "REQUEST_STARTED",
  request: {
    name,
    inProgress: true,
  },
});

export const requestFinished = (name: string) => ({
  type: "REQUEST_FINISHED",
  request: {
    name,
    inProgress: false,
  },
});
