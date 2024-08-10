const express = require('express');
const app = express();
const port = 3000;


const upload = require('./multerConfig');
const cros=require('cors');
app.use(cros());

app.post('/imgUpload',upload.single('filename'),(req,res)=>{
    const {id,name} = req.body;
    const myFile = req.file.filename;
    const obj = {id,name,myFile};
    res.json(obj);
})

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/uploads',express.static('./imgs'))


app.get('/',(req,res)=>{
    res.send('get data from server')
})




// app.all('/',(req,res)=>{
//     res.send('<h1>Hello from server</h1>');
// })


// app.use('/about',(req,res)=>{
//     res.send('<h1>About Us</h1>');
// })





// app.use((req,res,next)=>{
//     console.log('hello 1')
//     if(req.url === '/')
//     {
//         res.send('<h1>Hello from server</h1>');
//     }
//     else if(req.url === '/about')
//     {
//         res.send('<h1>About Us</h1>');
//     }
//     else
//     {
//         res.send('<h1>Not found</h1>');
//     }

   
    
// })


// app.use((req,res)=>{
//     console.log('hello 2')
//     res.send('hello from server 2')
// })

app.listen(port,()=>{
    console.log('Server started at port 3000')
})