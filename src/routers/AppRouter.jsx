import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import FilterOrders from "../pages/FilterOrders";
import OrderStats from "../components/OrderStats";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/orders" replace />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/filter" element={<FilterOrders />} />
        <Route path="/stats" element={<OrderStats />} />

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;