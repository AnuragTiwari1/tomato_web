//action types
export const SET_LOADER = "SET_LOADER";

export const setLoader = (loaderObj) => {
  return {
    type: SET_LOADER,
    payload: {
      isLoading: loaderObj.isLoading,
      loadingMessage: loaderObj.loadingMessage,
    },
  };
};
