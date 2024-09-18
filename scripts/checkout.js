import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// to import all the data in a file
import '../data/cart-oop.js';

renderCheckoutHeader();

renderOrderSummary();

renderPaymentSummary();