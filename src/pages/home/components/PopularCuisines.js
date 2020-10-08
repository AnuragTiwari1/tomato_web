import React from "react";
import "./styles.css";

export const PopularCuisines = (props) => {
  return (
    <div>
      <p style={{ padding: "5px" }}>Popular Cuisines in your area</p>
      <div style={{ padding: "5px", display: "flex", flexWrap: "wrap" }}>
        {props.cuisines.map((e) => (
          <CuisineCard name={e} />
        ))}
      </div>
    </div>
  );
};

const CuisineCard = ({ name }) => {
  return (
    <div className="fancyCard">
      <p>{name}</p>
    </div>
  );
};
