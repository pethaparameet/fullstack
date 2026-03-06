const Order = require('../models/Order');
// GET /orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user')
      .populate('products.product');

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};
// POST /orders
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      user: req.body.user,
      products: req.body.products,
      totalAmount: req.body.totalAmount,
      shippingAddress: req.body.shippingAddress,
      status: "Pending",
      paymentStatus: "Pending"
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: savedOrder
    });

  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};