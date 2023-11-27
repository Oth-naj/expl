const express =require('express');
const  app =express();
const bodyParser = require('body-parser')
const ConnectDb = require('./Config/Collectdb')
const productroutes=require('./routes/productRoutes');
const userRoutes=require('./routes/userRoute');
const orderRoutes =require('./routes/ordeRoutes');

const cors =require('cors');
app.use(cors({
    origin: 'http://localhost:3007'
}));
app.use(bodyParser())
app.use(express.json())

ConnectDb();

app.use('/product',productroutes);
app.use('/user', userRoutes);
app.use('/order',orderRoutes)


// ...



app.listen(3007,()=>{
   console.log('started in 3000')
})