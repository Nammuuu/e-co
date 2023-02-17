// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   shippingInfo: {
//     address: {
//       type: String,
//       required: true,
//     },
//     city: {
//       type: String,
//       // required: true,
//     },
//     state: {
//       type: String,
//       required: true,
//     },
//     country: {
//       type: String,
//       required: true,
//     },
//     pinCode: {
//       type: Number,
//       // required: true,
//     },
//     phoneNo: {
//       type: Number,
//       required: true,
//     },
//   },


//   orderItems: [
//     {
//       productName: {
//         type: String,
//         required: true,
//       },
//       productPrice: {
//         type: Number,
//         // required: true,
//       },
//       quantity: {
//         type: Number,
//         required: true,
//       },
//       productImage: {
//         type: String,
//         // required: true,
//       },
//       productId: {
//         type: mongoose.Schema.ObjectId,
//         ref: "Product",
//         // required: true,
//       },
//     },
//   ],
  
//   user: {
//     type: mongoose.Schema.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   paymentInfo: {
//     id: {
//       type: String,
//       // required: true,
//     },
//     // status

//     currency: {
//       type: String,
//       // required: true,
//     },
//   },
//   paidAt: {
//     type: Date,
//     // required: true,
//   },
//   itemsPrice: {
//     type: Number,
//     // required: true,
//     default: 0,
//   },
//   taxPrice: {
//     type: Number,
//     default: 0,
//   },
//   shippingPrice: {
//     type: Number,
//     // required: true,
//     default: 0,
//   },
//   // totalPrice
//   amount: {
//     type: Number,
//     // required: true,
//     default: 0,
//   },
//   orderStatus: {
//     type: String,
//     // required: true,
//     default: "Processing",
//   },
//   deliveredAt: Date,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Order", orderSchema);

















const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      // required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },

  
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        // required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        // required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        // required: true,
      },
    },
  ],
  
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      // required: true,
    },
    paymentMethod: { type: String
      // , required: true
     },
    // status

    currency: {
      type: String,
      // required: true,
    },
  },
  paidAt: {
    type: Date,
    // required: true,
  },
  itemsPrice: {
    type: Number,
    // required: true,
    default: 0,
  },
  taxPrice: {
    type: Number,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    // required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    // required: true,
    default: 0,
  },
  amount: {
    type: Number,
    // required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    // required: true,
    default: "Processing",
  },
  cash: {
    type: String,
    // required: true,
    default: "cash on devearly 2",
  },
  paymentMethod: { 
    type: String, 
    // required: true 
    default: "paymentMethod",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);