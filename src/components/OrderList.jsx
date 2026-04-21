import { useOrder } from "../context/OrderContext";
import OrderCard from "./OrderCard";
import { isValidOrder } from "../utils/orderValidation";

const OrderList = () => {
  const { orders, loading } = useOrder();

  const validOrders = (Array.isArray(orders) ? orders : []).filter(isValidOrder);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (!validOrders.length) {
    return <p>No valid orders available</p>;
  }

  return (
    <div className="order-list">
      {validOrders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
};

export default OrderList;