
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// // const stripe = require("stripe")(process.env.STRIPE_SECRET);


// const stripe = require("stripe")("sk_test_51MQtCySGvG5AH790ADlqfhHCkuV2sOIuhE2UpIfIQIC2D9GFjNlpoKEqMzNKkZ5mQabzbswfx52ADNXTuRhrmcjB00LFlkJHMF");

// exports.Payment = catchAsyncErrors(async (req, res, next) => {
//   const myPayment = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: "inr",
//     metadata: {
//       company: "MERN", 
//     },
//   });
 
//     res
//     .status(200)
//     .json({ success: true, client_secret: myPayment.client_secret });
// });

// exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
//   res.status(200).json({stripeApiKey: process.env.STRIPE_API_KEY });
// });
 


// module.exports.orders = () =>{
//   res.send({orders})
// }

// module.exports.verfiy = () =>{
//   res.send({verfiy})
// }
// extra 


const Razorpay = require('razorpay');
const crypto = require("crypto");
const YOUR_KEY_ID = "rzp_test_KoDaeUkNYC3Ubo"
const YOUR_SECRET = "yJEXed8xGHrMWrQ28Cyd7Byi"
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 

module.exports.orders = (req, res) => {
    let instance = new Razorpay({ key_id: YOUR_KEY_ID, key_secret: YOUR_SECRET })

    var options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
        currency: "INR",
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.send({ code: 500, message: 'Server eEr.' })
        }
        return res.send({ code: 200, message: 'order created', data: order })
    });
}
 
module.exports.verify = (req, res) =>{
   

 let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

  
  var expectedSignature = crypto.createHmac('sha256', YOUR_SECRET)
        .update(body.toString())
        .digest('hex');
                                  
  var response = {"signatureIsValid":"false"}
  if(expectedSignature === req.body.response.razorpay_signature){
    res.send({code : 200 , message : 'Sign Valid'});
  }else{
    res.send({code : 500 , message : 'Sign Invali'});
}}




















// const Razorpay = require('razorpay');
// const crypto = require("crypto");
// const YOUR_KEY_ID = "rzp_test_KoDaeUkNYC3Ubo"
// const YOUR_SECRET = "yJEXed8xGHrMWrQ28Cyd7Byi"
// const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 

// module.exports.orders =  catchAsyncErrors( (req, res, next) => {
//     let myPayment = new Razorpay({ key_id: YOUR_KEY_ID, key_secret: YOUR_SECRET })

//     var options = {
//         amount: req.body.amount * 100,  // amount in the smallest currency unit
//         currency: "INR",
//         metadata: {
//                 company: "MERN", 
//           },
//     };
//     myPayment.orders.create(options, function (err, order) {
//         if (err) {
//             return res.send({ code: 500, message: 'Server eErr.' })
//         }
//         return res.send({ code: 200, message: 'order created', data: order })
//             //  order
//             // .status(200)
//             // .json({ success: true, client_secret: myPayment.client_secret });
//   });
// })
 
// module.exports.verify = catchAsyncErrors(async(req, res, next) =>{
   

//  let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

  
//   var expectedSignature = crypto.createHmac('sha256', YOUR_SECRET)
//         .update(body.toString())
//         .digest('hex');
                                  
//   var response = {"signatureIsValid":"false"}
//   if(expectedSignature === req.body.response.razorpay_signature){
//     res.send({code : 200 , message : 'Sign Valid'});
//   }else{
//     res.send({code : 500 , message : 'Sign Invalid'});
//   }


// })
