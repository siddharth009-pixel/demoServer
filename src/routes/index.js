const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    console.log('object')
    return res.status(200).send({message:"message"})
})

module.exports=router