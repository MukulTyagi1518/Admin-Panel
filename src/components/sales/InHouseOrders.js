import React from 'react'
import LatestOrders from '../orders/LatestOrders'

function InHouseOrders() {
  const filterInHouseOrders = (orders) => {
    return orders.filter(order => order.seller === "InHouse Order");
  };

  return (
    <LatestOrders 
      customFilter={filterInHouseOrders}
      title="InHouse Orders"
    />
  );
}

export default InHouseOrders