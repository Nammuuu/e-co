// const Razorpay = require('razorpay');
// const crypto = require("crypto");
// const YOUR_KEY_ID = "rzp_test_KoDaeUkNYC3Ubo"
// const YOUR_SECRET = "yJEXed8xGHrMWrQ28Cyd7Byi"
// const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 

// module.exports.orders = (req, res) => {

//     let instance = new Razorpay({ key_id: YOUR_KEY_ID, key_secret: YOUR_SECRET })

//     var options = {
//         amount: req.body.amount * 100,  // amount in the smallest currency unit
//         currency: "INR",
//     };

//     instance.orders.create(options, function (err, order) {
//         if (err) {
//             return res.send({ code: 500, message: 'Server eErr.' })
//         }
//         return res.send({ code: 200, message: 'order created', data: order })
//     });
// }
 
// module.exports.verify = (req, res, next) =>{  

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


// }












const Razorpay = require('razorpay');
const crypto = require("crypto");
const YOUR_KEY_ID = "rzp_test_KoDaeUkNYC3Ubo"
const YOUR_SECRET = "yJEXed8xGHrMWrQ28Cyd7Byi"
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 

module.exports.orders =  catchAsyncErrors( (req, res, next) => {
    let myPayment = new Razorpay({ key_id: YOUR_KEY_ID, key_secret: YOUR_SECRET })

    var options = {
        amount: req.body.totalPrice * 100,  // amount in the smallest currency unit
        currency: "INR",
        metadata: {
          company: "MERN", 
        },
    };
    myPayment.orders.create(options, function (err, order) {
        if (err) {
            return res.send({ code: 500, message: 'Server eErrr.' })
        }
        return res.send({ code: 200, message: 'order created', data: order })
            
  });
})
 
module.exports.verify = catchAsyncErrors(async(req, res, next) =>{
   

 let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

  
  var expectedSignature = crypto.createHmac('sha256', YOUR_SECRET)
        .update(body.toString())
        .digest('hex');
                                  
  var response = {"signatureIsValid":"false"}
  if(expectedSignature === req.body.response.razorpay_signature){
    res.send({code : 200 , message : 'Sign Valid'});
  }else{
    res.send({code : 500 , message : 'Sign Invalid'});
  }


})


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
