import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

export const NearbyRestaurants = (props) => {
  return (
    <div>
      <p style={{ padding: "5px" }}>Popular Restaurants in your area</p>
      <div style={{ padding: "5px", display: "flex", flexWrap: "wrap" }}>
        {props.restaurants.map((e) => (
          <RestaurantCard {...e} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = ({
  name,
  user_rating,
  cuisines,
  average_cost_for_two,
  currency,
  id,
}) => {
  const history = useHistory();

  return (
    <div className="fancyCard pointer" onClick={()=>history.push(`/about/${id}`)}>
      <p>{name}</p>
      <p>{cuisines}</p>
      <p>
        average cost for 2 : {currency} {average_cost_for_two}{" "}
        <span style={{ float: "right" }}>⭐{user_rating.aggregate_rating}</span>
      </p>
    </div>
  );
};
