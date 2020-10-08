import React from "react";
import { RestaurantServices } from "../../services/restaurantServices";
import { setLoader } from "../../state/reducers/appReducer/actions";
import { useDispatch } from "react-redux";

export function About(props) {
  const {
    match: { params },
  } = props;

  const dispatch = useDispatch();
  const [resDetails, setResDetails] = React.useState({});

  const restaurantServices = new RestaurantServices();

  React.useEffect(() => {
    dispatch(
      setLoader({
        isLoading: true,
        loadingMessage: "Fetching Restaurant details for you",
      })
    );
    restaurantServices
      .getRestaurantDetailsById(params.resId)
      .then(({ data }) => {
        setResDetails(data);
        dispatch(setLoader({ isLoading: false }));
      });
  }, [params.resId]);

  return (
    <div>
      <h2>About</h2>
      <code>{JSON.stringify(resDetails, null, 2)}</code>
    </div>
  );
}
