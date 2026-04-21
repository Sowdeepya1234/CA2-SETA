import { useMemo, useState } from "react";
import { useOrder } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";

const FilterOrders = () => {
  const { orders } = useOrder();
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const customer = order.customerName?.toLowerCase() || "";
      const restaurant = order.restaurant?.toLowerCase() || "";
      const value = search.toLowerCase();

      return customer.includes(value) || restaurant.includes(value);
    });
  }, [orders, search]);

  return (
    <div className="app-container">
      <h1>Filter Orders</h1>

      <input
        type="text"
        placeholder="Search by customer or restaurant"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        data-testid="filter-input"
      />

      <div className="order-list">
        {filteredOrders.length === 0 ? (
          <p>No matching orders found</p>
        ) : (
          filteredOrders.map((order) => (
            <OrderCard key={order.orderId} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default FilterOrders;