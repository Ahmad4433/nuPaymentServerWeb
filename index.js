// require("dotenv").config()
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const userRoute = require('./routes/user/registerUser')
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
// app.get('/', (req, res, next) => {
//   res.send('server is running');
// });


// app.use('/user',userRoute)


// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500; 
//     const message = err.message || 'Internal Server Error'; 
//     res.status(statusCode).json({ message: message });
// });




// mongoose
//   .connect(process.env.MONGO_URL)
//   .then((status) => {
//     app.listen(9000, () => console.log("server is running on port:9000"));
//     console.log("db is connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });





//   const express = require('express');
// require('dotenv').config();
// const cors = require('cors');
// const userRoute = require('./routes/user/registerUser');
// const mongoose = require('mongoose');

// const app = express();

// const getConnection = () => {
//   try {
//     mongoose.connect(process.env.MONGO_URL);
//     mongoose.connection.once('connected', () => console.log('db is connected'));
//   } catch (error) {
//     console.log(error);
//   }
// };

// getConnection();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors())

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });




// app.get('/', (req, res, next) => {
//   res.send('server is running');
// });

// // User routes here
// app.use('/user', userRoute);

// // Error handling middleware
// app.use((error, req, res, next) => {
//   const statusCode = error.statusCode || 500;
//   const errorMessage = error.message || 'Server error';
//   res.status(statusCode).json({ message: errorMessage });
// });

// const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });






const express = require('express');
require('dotenv').config();
const cors = require('cors');
const userRoute = require('./routes/user/registerUser');
const mongoose = require('mongoose');
const path = require('path')
const invoiceRoutes = require('./routes/admin/invoices/invoice')
const paymentRoutes = require('./routes/admin/payment/payment')
const productRoute = require('./routes/admin/products/product')
const userListRoutes = require('./routes/admin/user-list/userList')
const salesUserRoute = require('./routes/admin/sales-user/salesUser')
const combineUsersRoute  = require('./routes/get-users-from-server/allUsersList')
const app = express();

// Set up CORS
app.use(cors());

// Middleware to handle CORS preflight requests
app.options('*', cors());

// Connect to MongoDB
const getConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB is connected');
  } catch (error) {
    console.log(error);
  }
};

getConnection();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, 'images')));
// Rout
app.get('/', (req, res) => {
  res.send('Server is running');
});

// User routes
app.use('/user', userRoute);


//admin routes
app.use('/invoice',invoiceRoutes)
app.use('/payment',paymentRoutes)
app.use('/product',productRoute)
app.use('/admin/user',userListRoutes)
app.use('/sales',salesUserRoute)
app.use('/all',combineUsersRoute)

// Error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || 'Server error';
  res.status(statusCode).json({ message: errorMessage });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
