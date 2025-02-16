import { productsList, orders } from "./data";

// getMenu = getProductsList
// menu = productsList

export async function getProductsList() {
  return productsList;
}

export async function getOrder(id) {
  const order = orders.find((order) => order.id === id);
  if (!order) throw Error(`Couldn't find order #${id}`);
  return order;
}

export async function createOrder(newOrder) {
  try {
    const newId = orders.length ? orders[orders.length - 1].id + 1 : 1;
    const order = { id: newId, ...newOrder };
    orders.push(order);
    return order;
  } catch {
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
