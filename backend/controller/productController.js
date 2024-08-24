import Product from "../models/productModel.js"
import cloudinary from 'cloudinary'
import fs from 'fs/promises'
export const addProduct = async(req,res) =>{
    const {name,category,new_price,old_price} = req.body;
    let id;
    const products = await Product.find({})
    if (products.length > 0) {
        id = products[products.length-1].id +1
    }else{
        id = 1
    }
    try {
        const product = new Product({
            id,
            name,
            image:'image',
            category,
            new_price,
            old_price
        })
    
        if(req.file){
            const result = await cloudinary.v2.uploader.upload(req.file.path,{
                folder :'E-commerce'
            })
            if (result) {
                product.image = result.secure_url
            }
            fs.rm(`upload/${req.file.filename}`)
        }
        await product.save()
        res.status(200).json({
            success:true,
            message : 'product added',
        })
    } catch (error) {
        console.log(error.message);
    }
   
}

export const removeProduct = async(req,res) =>{
    const {id} = req.body;
    await Product.findOneAndDelete({id})
    res.status(201).json({
        success:true,
        message : "product removed"
        
    })
}

export const getAllProducts = async (req,res) => {
    const products =await Product.find({})
    res.status(200).json({
        success:true,
        products
    })
}
 export const newCollection = async (req,res) => {
    const products =await Product.find({})
    let newcollection = products.slice(1).slice(-8)
    res.status(200).json({
        success:true,
        newcollection
    })
 }
 export const popularInWomen = async (req,res) => {
    const products =await Product.find({category:'Women'})
    let popular = products.slice(0,4)
    res.status(200).json({
        success:true,
        popular
    })
 }