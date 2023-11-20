const express =require('express');
const  app =express();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const productroutes=require('./routes/productRoutes');
const cors =require('cors');
app.use(cors({
    origin: 'http://localhost:3007'
}));
app.use(express.json())
app.use(multer().single('image'))
app.use('/',productroutes);



app.listen(3007,()=>{
   console.log('started in 3000')
})