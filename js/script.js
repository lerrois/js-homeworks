'use strict';

const product = {
  name: 'Joggers',
  price: '100',
  quantity: '100',
  get totalValue() {
    return `${this.price * this.quantity}`;
  },
  get getName() {
    return this.name;
  },
  set setName(name) {
    if (typeof name !== 'string' || name === '') {
      throw new Error('Name must be a not empty string');
    }
    this.name = name;
  },
  get getPrice() {
    return this.price;
  },
  set setPrice(value) {
    const price = parseInt(value, 10);
    if (Number.isNaN(price) || price < 0) {
      throw new Error('Price must be more then 0');
    }
    this.price = price;
  },
};

Object.defineProperty(product, 'name', {
  value: 'Joggers',
  writable: true,
});

Object.defineProperty(product, 'price', {
  writable: true,
  value: 100,
});

product.setPrice = 55;
console.log(product);
console.log(product.totalValue);
