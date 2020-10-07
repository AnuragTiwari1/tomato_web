import React from "react";
import { setLoader } from "../../../state/reducers/appReducer/actions";
import { setLocation } from "../../../state/reducers/restaurantReducer/actions";
import { useDispatch } from "react-redux";
import { RestaurantServices } from "../../../services/restaurantServices";

export const HeroComponent = (props) => {
  const dispatch = useDispatch();
  const restaurantServices = new RestaurantServices();

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      dispatch(
        setLoader({
          isLoading: true,
          loadingMessage: "Fetching Restaurants near you",
        })
      );
      navigator.geolocation.getCurrentPosition(
        ({ coords }) =>
          restaurantServices
            .getRestaurantByLatLong({
              lat: coords.latitude,
              lon: coords.longitude,
            })
            .then(({ data }) => {
              dispatch(
                setLocation(
                  {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    name: data.location.title,
                  },
                  data.nearby_restaurants,
                  data.popularity.top_cuisines
                )
              );
              dispatch(setLoader({ isLoading: false }));
            }),
        () => alert("Please allow location access")
      );
    } else {
      console.log("Not Available");
    }
  }, []);

  return (
    <div
      style={{
        background:
          "url(https://b.zmtcdn.com/images/developers/apihome_bg.jpg?output-format=webp)center top",
        backgroundSize: "cover",
        minHeight: "250px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Tomato</h1>
      <p>A cheap clone of zomato</p>
      <input placeholder="enter location here" />
    </div>
  );
};
