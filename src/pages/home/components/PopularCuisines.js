import React from "react";
import "./styles.css";

export const PopularCuisines = (props) => {
  return (
    <div>
      <p>Popular Cuisines near you</p>
      {props.cuisines.map((e) => (
        <CuisineCard name={e} />
      ))}
    </div>
  );
};

const CuisineCard = ({ name }) => {
  return (
    <div className="cuisineCard">
      <p>{name}</p>
    </div>
  );
};
