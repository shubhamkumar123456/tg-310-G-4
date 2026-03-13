const router = require("express").Router();

const productController = require("../controllers/productController");
const upload = require("../config/multer");

router.post("/add", upload.single("image"), productController.addProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
