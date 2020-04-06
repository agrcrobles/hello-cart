/**
 * Mocking client-server processing
 */
const _products = [
  { id: 1, title: "Bread", price: 500.01, inventory: 2 },
  { id: 2, title: "Cofee", price: 10.99, inventory: 10 },
  { id: 3, title: "Milk", price: 19.99, inventory: 5 },
  { id: 4, title: "6 Pack Eggs", price: 19.99, inventory: 5 },
  { id: 5, title: "6 Pack Beer", price: 9.99, inventory: 5 },
  { id: 6, title: "Tea", price: 9.99, inventory: 5 },
  { id: 7, title: "Sugar", price: 9.99, inventory: 5 }
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    }, 100);
  }
};
