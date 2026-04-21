import { useMemo, useState } from "react";
import { useOrder } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";
import { isValidOrder } from "../utils/orderValidation";

const FilterOrders = () => {
  const { orders, loading } = useOrder();
  const [search, setSearch] = useState("");

  const searchValue = search.trim();

  const filteredOrders = useMemo(() => {
    const validOrders = (Array.isArray(orders) ? orders : []).filter(isValidOrder);

    if (!searchValue) {
      return [];
    }

    return validOrders.filter((order) =>
      (order?.restaurant || "")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  }, [orders, searchValue]);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="app-container">
      <h1>Filter Orders</h1>

      <input
        type="text"
        placeholder="Search by restaurant name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        data-testid="filter-input"
      />

      <div className="order-list">
        {!searchValue ? (
          <p>Please enter a restaurant name</p>
        ) : filteredOrders.length === 0 ? (
          <p>no results found</p>
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