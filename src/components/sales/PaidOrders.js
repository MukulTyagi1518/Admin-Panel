import React from 'react'
import LatestOrders from '../orders/LatestOrders'

function PaidOrders() {
    const filterPaidOrders = (orders) => {
        return orders.filter(order => order.paymentStatus === "Paid");
      };
    
      return (
        <LatestOrders 
          customFilter={filterPaidOrders}
          title="Paid Orders"
        />
      );
}

export default PaidOrders