const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const productRoutes = require('./routes/productroute');
const userRoutes = require('./routes/userroute');
const cartRoutes = require('./routes/cartroute');
const orderRoutes = require('./routes/orderroute');

// Use routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});