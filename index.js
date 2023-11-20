const express =require('express');
const  app =express();
const bodyParser = require('body-parser')

const productroutes=require('./routes/productRoutes');
const cors =require('cors');
app.use(cors({
    origin: 'http://localhost:3007'
}));
app.use(bodyParser())
app.use(express.json())

app.use('/',productroutes);

// ...



app.listen(3007,()=>{
   console.log('started in 3000')
})