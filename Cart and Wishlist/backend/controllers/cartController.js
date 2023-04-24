const cartModel = require('../models/cartModel')
const Cart = require('../models/cartModel')
const mongoose = require('mongoose')

//get all carts
const getCarts = async (req, res) => {
    const carts = await Cart.find({}).sort({createdAt: -1})

    res.status(200).json(carts)
}


//get a single cart
const getCart = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such cart'})
    }

    const cart  = await Cart.findById(id)
    
    if(!cart){
        return res.status(404).json({error: 'No such cart'})
    }

    res.status(200).json(cart )

}

//create new cart
const createCart = async (req, res) => {
    const {studentId, items, prices, level} = req.body

    let emptyFields = []

    if (!studentId){
        emptyFields.push('studentId')
    }
    if (!items){
        emptyFields.push('items')
    }
    if (!prices){
        emptyFields.push('prices')
    }
    if (!level){
        emptyFields.push('level')
    }
    
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields })
    }

    
    //add doc to db
    try{
        const cart = await Cart.create({studentId, items, prices,level})
        res.status(200).json(cart)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a cart
const deleteCart = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such cart'})
    }

    const cart = await Cart.findOneAndDelete({_id: id})

    if(!cart){
        return res.status(400).json({error: 'No such cart'})
    }

    res.status(200).json(cart)
}


//update a cart
const updateCart = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such cart'})
    }
    const cart = await Cart.findOneAndUpdate({_id: id}, {
       ...req.body
    })

    if(!cart){
        return res.status(400).json({error: 'No such cart'})
    }
    res.status(200).json(cart)
}


module.exports = {
    getCarts,
    getCart,
    createCart,
    deleteCart,
    updateCart
}