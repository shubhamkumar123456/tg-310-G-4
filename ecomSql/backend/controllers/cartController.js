const db = require("../config/db");

// Add to cart
exports.addToCart = (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user.id;
  console.log("id = ",user_id)

  // 1️⃣ Check if cart exists
  db.query(
    "SELECT * FROM cart WHERE user_id = ?",
    [user_id],
    (err, cartData) => {
      if (cartData.length === 0) {
        // 2️⃣ Create cart
        db.query(
          "INSERT INTO cart (user_id) VALUES (?)",
          [user_id],
          (err, result) => {
            console.log(result);
            const cartId = result.insertId;
            // 3️⃣ Insert cart item
            db.query(
              "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
              [cartId, product_id, quantity],
              () => res.json({ message: "Added to cart" }),
            );
          },
        );
      } else {
        const cartId = cartData[0].id;

        db.query(
          "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
          [cartId, product_id, quantity],
          () => res.json({ message: "Added to cart" }),
        );
      }
    },
  );
};

// VIEW CART
exports.viewCart = (req, res) => {
  const userId = req.user.id;

  // 1️⃣ Get cart id of user
  db.query(
    "SELECT * FROM cart WHERE user_id = ?",
    [userId],
    (err, cartData) => {
      if (err) return res.status(500).json(err);

      if (cartData.length === 0) {
        return res.json({ message: "Cart is empty" });
      }

      const cartId = cartData[0].id;

      // 2️⃣ Get cart items with product details
      db.query(
        `SELECT 
                cart_items.id AS cart_item_id,
                products.id AS product_id,
                products.name,
                products.price,
                products.image,
                cart_items.quantity,
                (products.price * cart_items.quantity) AS subtotal
             FROM cart_items
             JOIN products ON cart_items.product_id = products.id
             WHERE cart_items.cart_id = ?`,
        [cartId],
        (err, items) => {
          if (err) return res.status(500).json(err);

          // 3️⃣ Calculate total
          let total = 0;
          items.forEach((item) => {
            total += Number(item.subtotal);
          });

          res.json({
            cartId,
            items,
            total,
          });
        },
      );
    },
  );
};

exports.updateQuantity = (req, res) => {
  const { cart_item_id, action } = req.body;
 
  // action = "increase" or "decrease"

  // 1️⃣ Get current quantity
  db.query(
    "SELECT quantity FROM cart_items WHERE id = ?",
    [cart_item_id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0)
        return res.status(404).json({ message: "Cart item not found" });

      let currentQty = result[0].quantity;

      // 2️⃣ Increase
      if (action === "increase") {
        currentQty += 1;

        db.query(
          "UPDATE cart_items SET quantity = ? WHERE id = ?",
          [currentQty, cart_item_id],
          () => res.json({ message: "Quantity increased" }),
        );
      }

      // 3️⃣ Decrease
      else if (action === "decrease") {
        if (currentQty > 1) {
          currentQty -= 1;

          db.query(
            "UPDATE cart_items SET quantity = ? WHERE id = ?",
            [currentQty, cart_item_id],
            () => res.json({ message: "Quantity decreased" }),
          );
        } else {
          // If quantity becomes 0 → delete item
          db.query("DELETE FROM cart_items WHERE id = ?", [cart_item_id], () =>
            res.json({ message: "Item removed from cart" }),
          );
        }
      } else {
        res.status(400).json({ message: "Invalid action" });
      }
    },
  );
};

// REMOVE PRODUCT FROM CART
exports.removeFromCart = (req, res) => {
  const { cart_item_id } = req.body;

  db.query(
    "DELETE FROM cart_items WHERE id = ?",
    [cart_item_id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Item not found" });

      res.json({ message: "Product removed from cart" });
    },
  );
};
