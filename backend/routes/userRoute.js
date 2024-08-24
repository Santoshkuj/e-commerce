import { Router } from "express";
import { addToCart, fetchUser, getCartData, login, removeFromCart, signUp } from "../controller/userController.js";

const router = Router()

router.post('/signup',signUp)
router.post('/login',login)
router.post('/addtocart',fetchUser,addToCart)
router.post('/remove',fetchUser,removeFromCart)
router.post('/cartdata',fetchUser,getCartData)

export default router;