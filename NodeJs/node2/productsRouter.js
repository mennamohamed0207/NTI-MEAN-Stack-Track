const express=require('express');
const router=express.Router()


const products=[{id:1,name:"p1",img:"http://localhost:3330/myimgs/C-HR.jpg"},{id:2,name:"p2"},{id:3,name:"p3"}]

router.post('/',(req,res)=>{
   
    products.push(req.body)
    res.status(201).json(products)
})


router.get('/',(req,res)=>{
res.status(200).json(products)
})


router.get('/:id',(req,res)=>{
   const productId=+req.params.id;
    const product=products.find(p=>p.id===productId)

    if(product){
    res.status(200).json(product)}
    

    else{
        res.status(404).send('product not found')
    }
})
module.exports=router