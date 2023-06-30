const express=require('express')

const router=express.Router()

const orderController=require('../controllers/order')

router.get('/get-orders',orderController.getOrders)
router.post('/order/post-order',orderController.postOrders)
router.delete('/delete-order/:id',orderController.deleteById)

module.exports=router;