const express=require('./node_modules/express');
const app=new express();

app.get('/',(req,res)=>{
    console.log('hello');
});
app.post('/hello',(req,res)=>{
    console.log('hello post');
    res.send("<h1>Hello</h1>");
})
app.listen(3000,()=>console.log('server running on port 3000'));