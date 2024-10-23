'use strict';

let product = {
  name: "Joggers",
  price: "100",
  quantity: "100",
};

Object.defineProperty(product, 'name', {
  value: "Joggers",
  writable: true,
});

Object.defineProperty(product, 'name', {
  value: "Joggers",
  writable: true,
});



//Використовуючи Object.defineProperty, додайте властивість name, яка:
//
// Читається та записується.
// Якщо ім'я не є рядком або пусте, не дозволяє встановити значення та виводить помилку в консоль.
// Додайте властивість price, яка:
//
// Читається та записується.
// Якщо ціна не є числом більше 0, не дозволяє встановити значення та виводить помилку.
// Додайте властивість totalValue, яка обчислюється як price * quantity та є доступною лише для читання (геттер).