//action types
export const SET_LOCATION = "SET_LOCATION";

export const setLocation = (location, restaurantList, cuisines) => {
  return {
    type: SET_LOCATION,
    payload: {
      location,
      restaurantList: restaurantList.map((r) => r.restaurant),
      cuisines,
    },
  };
};
