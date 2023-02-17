const app = require("./app.js");
// import {app} from "./app.js"
const connectDatabase = require("./db/Database.js");
const cloudinary = require("cloudinary");
const Razorpay = require("razorpay")
// const paymentConllers = require("./controller/paymentConllers")






// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
    process.exit(1)
})  
   
// config 
if(process.env.NODE_ENV!=="PRODUCTION"){
require("dotenv").config({
    path:"backend/config/config.env"
})}
// connect database
connectDatabase();
   
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// extra 
// app.post('/orderss', paymentConllers.orders)
// app.post('/verify', paymentConllers.verify)
// extra 
  

// create server
const server = app.listen(process.env.PORT,() =>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


// Unhandled promise rejection
// process.on("unhandledRejection", (err) => {
//     console.log(`Shutting down server for ${err.message}`);
//     console.log(`Shutting down the server due to Unhandled promise rejection`);
//     server.close(() =>{
//         process.exit(1);
//     })
// })


// extra 
process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
      process.exit(1);
    });
});