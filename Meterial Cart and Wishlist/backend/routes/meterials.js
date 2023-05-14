const express = require('express')
const {
    createMeterial,
    getMeterials,
    getMeterial,
    deleteMeterial,
    updateMeterial
}= require('../controllers/meterialController')


const router = express.Router()

//GET all meterials
router.get('/', getMeterials)

//GET a single meterial
router.get('/:id', getMeterial)


//POST a new meterial
router.post('/', createMeterial)
    
//DELETE a meterial 
router.delete('/:id', deleteMeterial)

//UPDATE a meterial
router.patch('/:id', updateMeterial)



module.exports = router