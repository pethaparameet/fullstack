// Fake in-memory data for Products
let products = [
  { id: 1, name: 'Laptop', price: 1200, stock: 10 },
  { id: 2, name: 'Headphones', price: 150, stock: 50 },
  { id: 3, name: 'Keyboard', price: 80, stock: 30 }
];

// GET /products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// GET /products/:id
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

// POST /products
exports.createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};