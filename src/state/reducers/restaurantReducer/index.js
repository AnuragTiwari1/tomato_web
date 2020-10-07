import { SET_LOCATION } from "./actions";

const initialState = {
  location: {
    latitude: null,
    longitude: null,
    name: "",
  },
  restaurantList: [],
  cuisines: [],
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
