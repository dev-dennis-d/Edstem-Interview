class Item {
  constructor(
    productId,
    productName,
    productCategory,
    productPrice,
    productQuantity
  ) {
    this.productId = productId;
    this.productName = productName;
    this.productCategory = productCategory;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
  }
}

class Shop {
  constructor() {
    this.items = new Map();
  }

  addElectronicsDiscount(productCategory, productPrice) {
    if (this.items.has((productCategory = "electronics"))) {
      productPrice *= 0.15;
    }
    console.log(`The updated price after discount: ${productPrice} `);
  }

  addMouseDiscount(productName, productPrice) {
    if (this.items.has((productName = "Mouse"))) {
      productPrice *= 0.2;
    }
  }

  addCouponDiscount(productPrice) {
    if (this.items.has(productPrice >= 50)) {
      productPrice = productPrice - 10;
    }
  }

  addDeals(productCategory, productPrice) {
    if (
      this.items.has((productCategory = "Stationary" && productQuantity >= 2))
    ) {
      productQuantity += productQuantity;

      productPrice *= 0.2;
    }
  }
}

// const cart = new Shop();
cart = {
  items: [
    {
      id: 1,
      name: "Laptop",
      category: "electronics",
      price: 1000,
      quantity: 1,
    },
    { id: 2, name: "Mouse", category: "electronics", price: 50, quantity: 3 },
    { id: 3, name: "Notebook", category: "stationery", price: 10, quantity: 5 },
  ],
  discounts: {
    items: { 2: 0.2 }, // 20% off Mouse
    categories: { electronics: 0.15 }, // 15% off electronics
    cartCoupon: { minAmount: 50, discount: 10 }, // $10 off if total > $50
    deals: [{ category: "stationery", buyX: 2, getY: 1 }], // Buy 2 Get 1 Free
  },
};

for (let i = 0; i < 3; i++) {
  if (cart.items[i].category == "electronics") {
    console.log(
      `Discount of 15% of ${cart.items[i].price} = ${(disprice =
        cart.items[i].price - cart.items[i].price * 0.15)}  is added to ${
        cart.items[i].name
      } Therefore updated price=${disprice}`
    );
  }
  if (cart.items[i].name == "Mouse") {
    console.log(
      `Discount of 20% of ${cart.items[i].price} = ${
        cart.items[i].price * 0.2
      }  is added to ${cart.items[i].name} `
    );
  }
  if (cart.items[i].category == "stationery") {
    console.log(
      `You get to buy extra 1  of ${cart.items[i].name}  ${
        cart.items[i].quantity + 1
      }  is added to ${cart.items[i].name} `
    );
  }
}
