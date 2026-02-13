// In-memory carts: { userId: 1, items: [{ productId: 1, quantity: 2 }] }
let carts = [];

// GET /cart/:userId
exports.getCartByUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  const cart = carts.find(c => c.userId === userId);
  // Return empty items if no cart exists yet
  res.json(cart ? cart : { userId, items: [] });
};

// POST /cart/:userId/add
exports.addToCart = (req, res) => {
  const userId = parseInt(req.params.userId);
  const { productId, quantity } = req.body;

  let cart = carts.find(c => c.userId === userId);

  // If cart doesn't exist, create one
  if (!cart) {
    cart = { userId, items: [] };
    carts.push(cart);
  }

  // Check if item is already in cart
  const existingItem = cart.items.find(i => i.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  res.status(200).json(cart);
};