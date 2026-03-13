const router = require("express").Router();
const cartController = require("../controllers/cartController");
const { varifyToken } = require("../middleware/varifyToken");

router.post("/add", varifyToken, cartController.addToCart);
router.get("/",varifyToken, cartController.viewCart);
router.put("/updateCart", cartController.updateQuantity);

module.exports = router;