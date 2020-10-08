import React from "react";
import { RestaurantServices } from "../../services/restaurantServices";
import { setLoader } from "../../state/reducers/appReducer/actions";
import { useDispatch } from "react-redux";
// const resDetails = require("../../mocks/restuarantDetails.json");

export function About(props) {
  const {
    match: { params },
  } = props;

  const dispatch = useDispatch();
  const [resDetails, setResDetails] = React.useState(null);

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

  if (!resDetails) {
    return null;
  }

  return (
    <div style={{ padding: "5px" }}>
      <h2>About</h2>
      {!!resDetails.thumb && (
        <img alt="image" src={resDetails.thumb} loading="lazy"></img>
      )}
      <h3>{resDetails.name}</h3>
      <p>
        {resDetails.establishment} - {resDetails.cuisines}
      </p>
      <p>{resDetails.location.locality_verbose}</p>
      <p>
        {resDetails.is_delivering_now ? "Open now" : "Closed"}{" "}
        {resDetails.timings} (Today)
      </p>
      <p>Highlights: {resDetails.highlights.join(", ")}</p>
      <p>
        average cost for 2 : {resDetails.currency}{" "}
        {resDetails.average_cost_for_two}{" "}
        <span style={{ float: "right" }}>
          ⭐&nbsp;{resDetails.user_rating.aggregate_rating}
        </span>
      </p>
      <a style={{ float: "right" }} href={resDetails.url}>
        Order Now
      </a>
    </div>
  );
}
