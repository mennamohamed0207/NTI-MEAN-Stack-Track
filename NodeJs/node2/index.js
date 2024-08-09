const express=require ('express');
const app=express();
const port =3330

const aboutRouter=require('./aboutRouter')
const productsRouter=require('./productsRouter')
app.use(express.json())
// app.use(aboutRouter);
app.use('/myimgs',express.static('./upload'))

const multerConfig=require("./multerConfig")



app.post('/upload',multerConfig.single('filename'),(req,res)=>{
    const{id,name}=req.body;
    const filename=req.file.filename
    res.json({id,name,filename})
})
//upload single file





app.use('/about',aboutRouter);
app.use('/products',productsRouter);
//usefull that u dont write everytime

//first middleware
//any req accure will move to this miidleware
//next will turn you to next middleware
// app.use((req,res,next)=>{
//     console.log('hello1')
// next()
// })



// app.use((req,res,next)=>{
//     // next()
//     if(req.url==='/'){
//         // /=route website
//     res.send('<h1>hello from server</h1>')}

//  //any code after res aont happpen
//  else if(req.url==='/about'){
//     // /=route website
// res.send('<h1>hello from about</h1>')}

// else{res.send('<h1>not found</h1>')}
// next()
// //so next will not do any thing
//  })



//so we will use router instead of app
// router.get('/about',(req,res,next)=>{
//    req.method==='GET'
//     res.send('<h1>hello from about myGET</h1>')

//     })
//     app.post('/about',(req,res,next)=>{
//         req.method==='GET'
//         res.send('<h1>hello from about myPOST</h1>')}
    
//         )
    
app.use('/about/cv',(req,res,next)=>{res.send('<h1>hello from about cv</h1>')})
app.use('/about/projects',(req,res,next)=>{res.send('<h1>hello from about projs</h1>')})

// app.use((req,res,next)=>{
//     // next()
//     res.send('<h1>hello from server2</h1>')
//     //any code after res aont happpen
// next()
// //so next will not do any thing
// })


//sec middleware
// app.use((req,res,next)=>{
//     console.log('hello2')
// next()
// })

//we make server connection
app.listen(port,()=>{
    console.log("express started at 3000")
})
