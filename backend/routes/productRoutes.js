import { Router } from "express";
import uploads from '../multer/multer.js'
import { addProduct, getAllProducts, newCollection, popularInWomen, removeProduct, } from "../controller/productController.js";

const router = Router();

router.post('/add',uploads.single('image'),addProduct);
router.post('/remove',removeProduct)
router.get('/allproducts',getAllProducts)
router.get('/newcollection',newCollection)
router.get('/popular',popularInWomen)
export default router;