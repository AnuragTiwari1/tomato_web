import React from "react";
import { HeroComponent } from "./components/Herocomponent";
import { PopularCuisines } from "./components/PopularCuisines";
import { connect } from "react-redux";
import { NearbyRestaurants } from "./components/NearbyRestaurant";

function HomeComponent(props) {
  return (
    <div>
      <HeroComponent />
      <PopularCuisines cuisines={props.cuisines} />
      <NearbyRestaurants restaurants={props.restaurants} />
    </div>
  );
}

export const Home = connect((state) => ({
  cuisines: state.restaurantsReducer.cuisines,
  restaurants: state.restaurantsReducer.restaurantList,
}))(HomeComponent);
