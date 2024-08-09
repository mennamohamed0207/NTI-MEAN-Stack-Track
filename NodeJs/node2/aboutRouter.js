const express=require('express');
const router=express.Router();


router.get('/',(req,res,next)=>{
    req.method==='GET'
     res.send('<h1>hello from about myGET</h1>')
 
     })
    
    //  router.post('/',(req,res,next)=>{
    //     const obj={id:1,name:"ali",age:10}
    //      req.method==='POST'
    //      res.status(200).send(obj)}
    //      )
     
    const products=[{id:1,name:"p1"},{id:2,name:"p2"},{id:3,name:"p3"}]
    router.post('/',(req,res,next)=>{
        const obj={id:1,name:"ali",age:10}
         req.method==='POST'
        //  res.status(200).json(products[1].id)}
            // res.status(200).json(req.body.name)}
            // res.status(200).json(req.query)}

            const{name,grade}=req.query;
            res.status(200).json(grade);
        } )
//best practice use json instead of send



 module.exports=router;