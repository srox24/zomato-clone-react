import React from "react";
import { restaurant } from "../Data/restaurant";
import "../styles/delivery.css";
import DeliveryCollection from "./DeliveryCollection";
import Explore from "./Explore";
import Filters from "./Filters";
import TopBrands from "./TopBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-sort-alt center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurant;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands/>
      <Explore restaurant={restaurantList} collectionName={"Delivery Restaurant in Kolkata"}/>
    </div>
  );
};

export default Delivery;
