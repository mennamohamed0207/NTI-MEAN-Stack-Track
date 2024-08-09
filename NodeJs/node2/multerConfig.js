const multer=require('multer')//it is a  package
const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        //cb=callback
        cb(null,'upload')},
        filename:(req,file,cb)=>{
    cb(null,Date.now()+'_'+file.originalname)}
    //date wil ms to be sure that filename (img)will not be same at same time
})
const upload=multer({storage})

module.exports=upload