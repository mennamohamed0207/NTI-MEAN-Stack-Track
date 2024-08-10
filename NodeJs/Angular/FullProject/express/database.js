const mongoose=require('mongoose');
const express=require('express');
const app=express();
const port=3000;
app.use(express.json());

const connecting=()=>{
    mongoose.connect('mongodb+srv://mennamohamed0207:PZN2oliMRnf8KqmL@cluster0.ue0sm7q.mongodb.net/Portfolio').then(()=>{
        
        console.log('database connected');
    }).catch((err)=>{
        console.log(err);
    })
}
const schema=mongoose.Schema({
    name:String,
    category:String
});
const skills=mongoose.model('Skills',schema);

connecting();
app.post('/skill/add',async(req,res)=>{

    const {name,category}=req.body;
    const obj=new skills({name,category});
    const data=await obj.save();
    res.status(200).json({message:"skill added successfully",
       data:data
    });
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})