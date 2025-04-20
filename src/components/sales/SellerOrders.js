import React from 'react'
import LatestOrders from '../orders/LatestOrders'

function SellerOrders() {
  const filterSellerOrders = (orders) => {
    return orders.filter(order => order.seller === "Seller");
  };

  return (
    <LatestOrders 
      customFilter={filterSellerOrders}
      title="Seller Orders"
    />
  );
}

export default SellerOrders