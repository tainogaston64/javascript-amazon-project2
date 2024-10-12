import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
import {loadCart} from '../data/cart.js'
// to import all the data in a file
//import '../data/cart-class.js';
import '../data/car.js';
// import '../data/backend-practice.js';

//Promise.all(): runs multiple promises at the same time
//and waits for all to finish
Promise .all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2'); 
    });
  })

]).then((values) => {
  console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1');
//   });

// }).then((value) => {
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve(); 
//     });
//   }); 

// }).then(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// CallBack 
// loadProducts(() => {
//   loadCart(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
   
// });



