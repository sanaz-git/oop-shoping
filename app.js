import Cart from "./models/Cart.js";
import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");
const cartInstance = new Cart(cartListNode, totalPriceNode);
console.log(cartInstance);
async function render() {
  const productsData = await fetchData();

  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
