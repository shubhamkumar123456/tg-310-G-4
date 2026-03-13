const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err, result) => {
            if (err) return res.status(400).json(err);
            res.json({ message: "User Registered Successfully" });
        }
    );
};

// LOGIN
exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, result) => {
            if (result.length === 0)
                return res.status(400).json({ message: "User not found" });

            const validPassword = await bcrypt.compare(
                password,
                result[0].password
            );

            if (!validPassword)
                return res.status(400).json({ message: "Invalid Password" });

            const token = jwt.sign(
                { id: result[0].id },
                "SECRETKEY",
                { expiresIn: "1d" }
            );

            res.json({ token,role:result[0].role });
        }
    );
};

// GET ALL USERS (Admin)
exports.getUsers = (req, res) => {
    db.query("SELECT id, name, email FROM users", (err, result) => {
        res.json(result);
    });
};