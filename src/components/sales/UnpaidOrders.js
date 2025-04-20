import React from "react";
import LatestOrders from "../orders/LatestOrders";

const UnpaidOrders = () => {
  // Filter the orders to only show unpaid ones
  const filterUnpaidOrders = (orders) => {
    return orders.filter(order => 
      (order.PaymentStatus || order.paymentStatus) === "Not Paid"
    );
  };

  return (
    <LatestOrders 
      customFilter={filterUnpaidOrders}
      title="Unpaid Orders"
    />
  );
};

export default UnpaidOrders;