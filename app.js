const express = require('express');
const mongoose = require('mongoose'); // Added mongoose
const app = express();

// Middleware to parse JSON
app.use(express.json());

// --- MongoDB Connection ---
// 'fullstack' is used here as the database name
const dbURI = 'mongodb://127.0.0.1:27017/meet'; 

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB: fullstack database');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

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

// Error handling middleware (Optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});