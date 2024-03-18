class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }

  createCard(data) {
    const cardEle = document.createElement("div");

    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    // cardEle.appendChild(info); //when use html **here must use inner html instead of append
    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;

    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;
    // const img = document.createElement("img");
    // img.src = data.image;
    // img.alt = data.alt;
    const imgJSX = `<img alt="${alt}" src="${image}"/>`; //**

    return imgJSX;
  }
  productInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `<div>
    <h3>${name}</h3>
    <div>
    <span>${price}</span>
    <button data-id=${id}>+<button>
    </div>
     </div>`; //**

    return infoJSX;
  }
}

export default Products;
