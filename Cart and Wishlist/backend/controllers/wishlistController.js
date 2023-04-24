const wishlistModel = require('../models/wishlistModel')
const Wishlist = require('../models/wishlistModel')
const mongoose = require('mongoose')

//get all wishlists
const getWishlists = async (req, res) => {
    const wishlists = await Wishlist.find({}).sort({createdAt: -1})

    res.status(200).json(wishlists)
}


//get a single wishlist
const getWishlist = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such wishlist'})
    }

    const wishlist  = await Wishlist.findById(id)
    
    if(!wishlist){
        return res.status(404).json({error: 'No such wishlist'})
    }

    res.status(200).json(wishlist )

}

//create new wishlist
const createWishlist = async (req, res) => {
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
        const wishlist = await Wishlist.create({studentId, items, prices,level})
        res.status(200).json(wishlist)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a wishlist
const deleteWishlist = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such wishlist'})
    }

    const wishlist = await Wishlist.findOneAndDelete({_id: id})

    if(!wishlist){
        return res.status(400).json({error: 'No such wishlist'})
    }

    res.status(200).json(wishlist)
}


//update a wishlist
const updateWishlist = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such wishlist'})
    }
    const wishlist = await Wishlist.findOneAndUpdate({_id: id}, {
       ...req.body
    })

    if(!wishlist){
        return res.status(400).json({error: 'No such wishlist'})
    }
    res.status(200).json(wishlist)
}


module.exports = {
    getWishlists,
    getWishlist,
    createWishlist,
    deleteWishlist,
    updateWishlist
}