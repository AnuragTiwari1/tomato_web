import { SET_LOADER } from "./actions";

const initialState = {
  isLoading: false,
  loadingMessage: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
