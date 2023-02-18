const express = require('express');
const cors = require("cors")
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("./config/config.env")
const Stripe = require('stripe');

app.use(cors())
// app.use(express.json());
app.use(cookieParser());

// app.use(bodyParser.urlencoded({
//     limit: "50mb",
//     extended: false
//   }));
// app.use(bodyParser.json({limit: "50mb"}));

// app.use(bodyParser.urlencoded({extended:true}));
// // app.use(express.urlencoded({ limit: "60mb", extended: true }));
// app.use(fileUpload({}));

app.use(express.json({limit:'30mb'}));
// app.use(bodyParser.urlencoded({
//     limit: "50mb",
//     extended: false
//   }));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  }));
app.use(bodyParser.json({limit: "50mb"}));
app.use(fileUpload({}));
// app.use(cors())
// app.use(bodyParser.json({ limit: '30mb' }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


// config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })}

// non build code 
// dotenv.config({
//     path:"backend/config/config.env"
// })
 
 
// Route imports
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
const order = require("./routes/OrderRoute");
// const payment = require("./routes/PaymentRoute");
const cart = require("./routes/WishListRoute");
const orders = require("./routes/PaymentRoute");
const verify = require("./routes/PaymentRoute");
const Payment = require("./routes/Paymentt")

// extra 
app.use("/api/v2", orders)
app.use("/api/v2", verify)
app.use("/api/v2", Payment)

 
app.use("/api/v2",product);

app.use("/api/v2",user);

app.use("/api/v2",order);

// app.use("/api/v2", payment);

app.use("/api/v2",cart);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*",(req,res) =>{
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// }) 

 app.use(express.static(path.join(__dirname, "https://fabulous-hotteok-fed63e.netlify.app//build")));

app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname, "https://fabulous-hotteok-fed63e.netlify.app/build/index.html"));
}) 



https://fabulous-hotteok-fed63e.netlify.app/


 
// it's for errorHandeling
app.use(ErrorHandler);

module.exports = app 
