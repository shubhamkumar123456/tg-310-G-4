const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.post("/place", orderController.placeOrder);
router.get("/user/:userId", orderController.getUserOrders);

module.exports = router;