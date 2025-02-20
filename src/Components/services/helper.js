import { productsList, orders } from "./data";

export async function getProductsList() {
  return productsList;
}

export async function getOrder(id) {
  const order = orders.find((order) => order.id === id);
  if (!order) return null; // Return null instead of throwing an error
  return order;
}

export async function createOrder(newOrder) {
  try {
    const newId = orders.length ? Math.max(...orders.map((o) => o.id)) + 1 : 1;
    const order = { id: newId, ...newOrder };
    orders.push(order);
    return order;
  } catch (error) {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const orderIndex = orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) throw Error(`Couldn't find order #${id}`);

    orders[orderIndex] = { ...orders[orderIndex], ...updateObj };
  } catch {
    throw Error("Failed updating your order");
  }
}

(async () => {
  console.log(await getOrder(1)); // Should return null

  const newOrder = await createOrder({
    customerName: "Alice",
    items: [{ productId: 2, quantity: 1 }],
    total: 120,
  });

  console.log(await getOrder(newOrder.id)); // Should return the new order
})();
