import { useParams } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";

const OrderDetails = () => {
  const { id } = useParams();
  const { orders } = useOrder();

  const order = orders.find((o) => String(o.orderId) === id);

  if (!order) {
    return <h2>Order Not Found</h2>;
  }

  return (
    <div className="app-container">
      <h1>Order Details</h1>
      <OrderCard order={order} />
    </div>
  );
};

export default OrderDetails;