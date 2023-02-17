const express = require("express");
const { Payment, sendStripeApiKey } = require("../controller/PaymentController");
const router = express.Router();
const {isAuthenticatedUser} = require("../middleware/auth");
const {orders, verify} = require("../controller/paymentConllers")
// const {Payment} = require("../controller/OrderController")


// router.route("/payment/processs").post(isAuthenticatedUser, Payment);

// router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);
 
router.route('/payment/processs').post(orders)
router.route('/verify').post(verify)
// router.route('/payment').post(Payment)

 
module.exports = router; 

// const express = require("express");
// const { Payment, sendStripeApiKey } = require("../controller/PaymentController");
// const router = express.Router();
// const {isAuthenticatedUser} = require("../middleware/auth");

// router.route("/orders").post(isAuthenticatedUser, Payment);

// router.route("/verify").post(isAuthenticatedUser, );
 

// module.exports = router; 
