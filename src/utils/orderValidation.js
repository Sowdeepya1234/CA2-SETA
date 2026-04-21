export const isValidOrder = (order) => {
  const items = Array.isArray(order?.items) ? order.items : [];
  const hasItems = items.length > 0;
  const hasValidQuantities = items.every(
    (item) => Number.isFinite(item?.quantity) && item.quantity > 0
  );
  const hasValidTotalAmount =
    Number.isFinite(order?.totalAmount) && order.totalAmount > 0;

  return hasItems && hasValidQuantities && hasValidTotalAmount;
};