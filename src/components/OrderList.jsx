import { useOrder } from "../context/OrderContext";
import OrderCard from "./OrderCard";

const OrderList = () => {
  const { orders, loading } = useOrder();

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (!orders.length) {
    return <p>No valid orders available</p>;
  }

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
};

export default OrderList;