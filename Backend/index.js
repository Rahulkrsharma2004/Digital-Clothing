const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cors = require('cors')
dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors({origin: ["http://localhost:5173","https://digital-clothing-server.vercel.app","https://digital-clothing-server.vercel.app/products","https://digital-clothing-rks.vercel.app"],
    credentials: true,
  })
);

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);

app.use('/',(req,res) =>{
    res.send('API is running...');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
