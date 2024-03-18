import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");

async function render() {
  const productsData = await fetchData();
  console.log(productsData);
  const productsInstance = new Products(productsNode, productsData);
  console.log(productsInstance);

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
