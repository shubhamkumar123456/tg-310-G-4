const db = require("../config/db");

// PLACE ORDER
exports.placeOrder = (req, res) => {
    const { user_id } = req.body;

    db.query("SELECT * FROM cart WHERE user_id = ?", [user_id], (err, cartData) => {

        if (cartData.length === 0)
            return res.status(400).json({ message: "Cart is empty" });

        const cartId = cartData[0].id;

        db.query(
            `SELECT cart_items.*, products.price 
             FROM cart_items
             JOIN products ON cart_items.product_id = products.id
             WHERE cart_id = ?`,
            [cartId],
            (err, items) => {

                let total = 0;
                items.forEach(item => {
                    total += item.price * item.quantity;
                });

                db.query(
                    "INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)",
                    [user_id, total, "pending"],
                    (err, orderResult) => {

                        const orderId = orderResult.insertId;

                        items.forEach(item => {
                            db.query(
                                "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)",
                                [orderId, item.product_id, item.quantity]
                            );
                        });

                        db.query("DELETE FROM cart_items WHERE cart_id = ?", [cartId]);

                        res.json({ message: "Order Placed Successfully" });
                    }
                );
            }
        );
    });
};

// GET USER ORDERS
exports.getUserOrders = (req, res) => {
    const userId = req.params.userId;

    db.query(
        `SELECT orders.id, orders.total, orders.status, products.name, order_items.quantity
         FROM orders
         JOIN order_items ON orders.id = order_items.order_id
         JOIN products ON order_items.product_id = products.id
         WHERE orders.user_id = ?`,
        [userId],
        (err, result) => {
            res.json(result);
        }
    );
};