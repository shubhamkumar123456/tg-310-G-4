const db = require("../config/db");

// ADD PRODUCT (Admin)
exports.addProduct = (req, res) => {
  
    const image = req.file.filename
  
    const { name, price, stock ,description} = req.body;

    db.query(
        "INSERT INTO products (name, price, stock, image,description) VALUES (?, ?, ?,?, ?)",
        [name, price, stock, image, description],
        (err, result) => {
            if (err) return res.status(400).json(err);
            res.json({ message: "Product Added Successfully" });
        }
    );
};

// GET ALL PRODUCTS
exports.getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        res.json(result);
    });
};

// GET SINGLE PRODUCT
exports.getProductById = (req, res) => {
    db.query(
        "SELECT * FROM products WHERE id = ?",
        [req.params.id],
        (err, result) => {
            res.json(result[0]);
        }
    );
};

// UPDATE PRODUCT
exports.updateProduct = (req, res) => {
    const { name, price, stock, image } = req.body;

    db.query(
        "UPDATE products SET name=?, price=?, stock=?, image=? WHERE id=?",
        [name, price, stock, image, req.params.id],
        (err, result) => {
            res.json({ message: "Product Updated" });
        }
    );
};

// DELETE PRODUCT
const fs = require("fs");
const path = require("path");

// DELETE PRODUCT (Admin)
exports.deleteProduct = (req, res) => {

    const productId = req.params.id;

    // 1️⃣ Get product image name
    db.query(
        "SELECT image FROM products WHERE id = ?",
        [productId],
        (err, result) => {

            if (err) return res.status(500).json(err);
            if (result.length === 0)
                return res.status(404).json({ message: "Product not found" });

            const imageName = result[0].image;

            // 2️⃣ Delete from database
            db.query(
                "DELETE FROM products WHERE id = ?",
                [productId],
                (err) => {

                    if (err) return res.status(500).json(err);

                    // 3️⃣ Delete image from uploads folder
                    if (imageName) {
                        const imagePath = path.join(__dirname, "../uploads", imageName);

                        fs.unlink(imagePath, (err) => {
                            // Ignore error if file not found
                        });
                    }

                    res.json({ message: "Product deleted from server and database" });
                }
            );
        }
    );
};