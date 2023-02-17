// const mongoose = require("mongoose");


// const connectDatabase = () =>{
//     mongoose.connect(process.env.DB_URL,{
//         useNewUrlParser: true,
//         // useUnifiedTopology: true,
        
//         // useCreateIndex: true
        
//     })
    
//     .then((data) =>{
//         console.log(`mongodb is connected with server: ${data.connection.host}`);
//     })
//     .catch((err) => console.log(err));
    
// };
// mongoose.set("strictQuery", false);
// module.exports = connectDatabase;


// const mongoose = require("mongoose");

// const connectDatabase =( ) =>{
//     mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUniFiedTopology:true
//         // ,useCreateIndex:true
//     }).then((data)=>{
//         console.log(`mongodb contect on server: ${data.connection.host}`);  
//     });
// };


// module.exports = connectDatabase


// const mongoose = require("mongoose");

// const URI = process.env.DB_URL;

// const connectDatabase = () => {
//   mongoose.connect(URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // useCreateIndex: true,
//     },)
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;


const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};
mongoose.set('strictQuery', true);
module.exports = connectDatabase;
 