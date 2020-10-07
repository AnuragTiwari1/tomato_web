import React from "react";
import { HeroComponent } from "./components/Herocomponent";
import { PopularCuisines } from "./components/PopularCuisines";
import { connect } from "react-redux";

function HomeComponent(props) {
  return (
    <div>
      <HeroComponent />
      <PopularCuisines cuisines={props.cuisines} />
      {/* <NearbyRestaurant /> */}
    </div>
  );
}

export const Home = connect((state) => ({
  cuisines: state.restaurantsReducer.cuisines,
}))(HomeComponent);
