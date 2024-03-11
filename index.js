const express =require('express');
const  app =express();
const bodyParser = require('body-parser')
<<<<<<< HEAD
const connectDB = require('./config/collectDB')

=======
const ConnectDb = require('./Config/Collectdb')
>>>>>>> de2a24506862a675d32024959b1cfa8b43254b3e
const productroutes=require('./routes/productRoutes');
const userRoutes=require('./routes/userRoute');
const orderRoutes =require('./routes/ordeRoutes');

const cors =require('cors');
app.use(cors({
    origin: 'http://localhost:3007'
}));
app.use(bodyParser())
app.use(express.json())
<<<<<<< HEAD
connectDB();
app.use('/',productroutes);
=======

ConnectDb();

app.use('/product',productroutes);
app.use('/user', userRoutes);
app.use('/order',orderRoutes)

>>>>>>> de2a24506862a675d32024959b1cfa8b43254b3e

// ...



app.listen(3007,()=>{
   console.log('started in 3000')
})