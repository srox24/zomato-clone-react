import React from "react";
import "../styles/deliveryItem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={item.image}
          alt={item.title}
          className="delivery-item-image"
        />
      </div>
      <div className="delivery-item-title">{item.title}</div>
    </div>
  );
};

export default DeliveryItem;
