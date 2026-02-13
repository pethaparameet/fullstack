let orders = [];

// GET /orders
exports.getAllOrders = (req, res) => {
  res.json(orders);
};

// POST /orders (Checkout)
// Expects { userId: 1, totalAmount: 100 } in body
exports.createOrder = (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    userId: req.body.userId,
    items: req.body.items, // List of items
    totalAmount: req.body.totalAmount,
    date: new Date()
  };

  orders.push(newOrder);
  res.status(201).json({ message: 'Order placed successfully', order: newOrder });
};