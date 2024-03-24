class Products {
  constructor(parent, products, cart) {
    this.parent = parent;
    this.products = products;
    this.cart = cart;
    this.parent.addEventListener("click", this);
  }

  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }

  // createCard(data) {
  // const img = document.createElement("img");
  // img.src = data.image;
  // img.alt = data.alt;
  //cardEle.appendChild(img)

  //const info =document.createElement('div')
  //const productName=document.createElement('h3')
  //const control=document.createElement('div')
  //const price=document.createElement('span')
  //const button=document.createElement('button')

  //productName.innerText=data.name
  //price.innerText=data.price
  //button.innerText="+"

  //control.append(price,button)
  //info.append(productName,control)
  //cardEle.appendChild(info)

  //this.parent.appendChild(cardEle)
  //}

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
    const imgJSX = `<img alt="${alt}" src="${image}"/>`; //**
    return imgJSX;
  }
  productInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `<div id="product-info">
    <h3 >${name}</h3>
    <div>
    <span>$ ${price}</span>
    <button data-id=${id}>+<button>
    </div>
     </div>`; //**

    return infoJSX;
  }

  handleEvent(event) {
    const element = event.target;
    console.log(element.tagName);
    if (element.tagName === "BUTTON") {
      this.addToCard(element.dataset.id);
    }
  }

  addToCard(id) {
    const product = this.products.find((i) => i.id === +id);
    // console.log(product);
    this.cart.products.push(product);
    // console.log(this.cart);
    this.cart.showProducts();
  }
}

export default Products;
