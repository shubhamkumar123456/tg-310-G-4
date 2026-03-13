const express = require('express');
const app = express();
const port = 8090
const cors = require('cors');
const path = require('path');


app.use(cors());
app.use(express.json());

app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'))
);


app.get('/', (req, res) => {
    res.send('welcome page!');
});


const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

// app.use('/users', userRoutes);
// app.use('/products', productRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/orders",orderRoutes);


app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});