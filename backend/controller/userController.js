import UserModel from "../models/userModel.js"
import jwt from "jsonwebtoken"

export const signUp = async (req,res) => {
    const {email,name,password} = req.body
    if (!email || !name || !password) {
        return res.status(400).json({
            success: false,
            message: `all fields are required`
        })
    }
    const findUser = await UserModel.findOne({email})
    if (findUser) {
        return res.status(400).json({
            success: false,
            message: `user already exists with email ${email}`
        })
    }
    const user =new UserModel({
        name,
        email,
        password,
        cartData :{}
    })
    await user.save()

    const token = jwt.sign(user.id,'secret-ecom')

    res.status(200).json({
        success: true,
        message: 'registered successfully',
        token
    })
}

export const login = async (req,res) => {
    const {email,password} = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: `all fields are required`
        })
    }
    const user = await UserModel.findOne({email})
    if (user) {
       const checkPassword = await user.comparePassword(password);

       if (checkPassword) {
        const token = jwt.sign(user.id,'secret-ecom')
        res.status(200).json({
            success: true,
            message: 'registered successfully',
            token
        })
       } else{
        return res.status(400).json({
            success: false,
            message: "Wrong Password"
        })}
    }else{
        return res.status(400).json({
            success: false,
            message: "Wrong email"
        })}
}

export const fetchUser = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not authorised Please login"
        })
    }
    try {
        const data = await jwt.verify(token,'secret-ecom')
        req.user = data
        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error
        })
    }
}

export const addToCart = async (req,res) => {
    const {itemId} = req.body
    const userId = req.user
    let userData = await UserModel.findById(userId);
    let cartData = await userData.cartData
    if (!cartData[itemId]) {
        cartData[itemId] = 1;
      } else {
        cartData[itemId] += 1;
      }
      await UserModel.findByIdAndUpdate(userId,{cartData})
      res.status(200).json({
        success: true,
        message: 'Item added to cartdata',
    })
}
export const removeFromCart = async (req,res) => {
    const {itemId} = req.body
    const userId = req.user
    let userData = await UserModel.findById(userId);
    let cartData = await userData.cartData
    if (cartData[itemId]>0) {
        cartData[itemId] -= 1;
      }
      await UserModel.findByIdAndUpdate(userId,{cartData})
      res.status(200).json({
        success: true,
        message: 'Item removed from cartdata',
    })
}

export const getCartData = async (req,res) => {
    const userData = await UserModel.findById(req.user)
    let cart = userData.cartData;
    res.status(200).json({
        success: true,
        message: 'fetched cartdata',
        cart
    })
}