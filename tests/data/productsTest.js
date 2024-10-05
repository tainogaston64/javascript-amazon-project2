import{Product, Clothing, Appliances} from " ../../data/products.js";

describe('test suite: addToCart', () => {
  beforeEach(() => {
    //16e.
    spyOn(localStorage, 'setItem');
  })
  it('adds an existing product to the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
loadFromStorage();
});
});