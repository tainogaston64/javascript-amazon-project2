import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js'
// to import all the data in a file
//import '../data/cart-class.js';
import '../data/car.js';
import '../data/cart-class.js';
// import '../data/backend-practice.js';

// Async await is a shortcut for promises; it makes a function return a promise
 async function loadPage() {
   //await lets us wait for a promise to finish, before going to the next line.
  //await lets us write asynchronous code like normal code.
  // loadProductsFetch().then(() => {

  // })
  //using await we can only use it when were inside an async function
  await loadProductsFetch();

  const value = await new Promise((resolve) => {
        loadCart(() => {
          // when the value in resolve is returned we can save this value in a variable instead of using .then
          resolve('value3'); 
        });
      });

      renderCheckoutHeader();
      renderOrderSummary();
      renderPaymentSummary();
} 
loadPage();

//Promise.all(): runs multiple promises at the same time
//and waits for all to finish
// Promise .all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve('value2'); 
//     });
//   })

// ]).then((values) => {
//   console.log(values);
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });

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



