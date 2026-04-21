import { useEffect } from "react";
import { useOrder } from "../context/OrderContext";

const OrderStats = () => {
  const { orders } = useOrder();

  const totalOrders = orders.length;

  const deliveredOrders = orders.filter(
    (order) =>
      typeof order.status === "string" &&
      order.status.toLowerCase() === "delivered"
  ).length;

  const cancelledOrders = orders.filter(
    (order) =>
      typeof order.status === "string" &&
      order.status.toLowerCase() === "cancelled"
  ).length;

  useEffect(() => {
    window.appState = {
      totalOrders,
      deliveredOrders,
      cancelledOrders,
    };
  }, [totalOrders, deliveredOrders, cancelledOrders]);

  return (
    <div>
      <h1>Order Statistics</h1>

      <p data-testid="total-orders">
        Total Orders: {totalOrders}
      </p>

      <p data-testid="delivered-orders">
        Delivered Orders: {deliveredOrders}
      </p>

      <p data-testid="cancelled-orders">
        Cancelled Orders: {cancelledOrders}
      </p>
    </div>
  );
};

export default OrderStats;