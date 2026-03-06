const Cart = require('../models/Cart');
// GET /cart/:userId
exports.getCartByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    let cart = await Cart.findOne({ user: userId })
      .populate('items.product');

    if (!cart) {
      return res.json({ user: userId, items: [], totalPrice: 0 });
    }

    res.json(cart);

  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};
// POST /cart/:userId/add
exports.addToCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });

    // If cart doesn't exist
    if (!cart) {
      cart = new Cart({
        user: userId,
        items: []
      });
    }

    // Check if product already exists in cart
    const existingItem = cart.items.find(
      item => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity: quantity
      });
    }

    await cart.save();

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error });
  }
};