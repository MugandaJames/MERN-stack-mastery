const app = require('./index.js');
const mongoose = require('mongoose');
require("dotenv").config();

const productRoutes = require("./routes/product.routes.js");
const authRoutes = require("./routes/auth.routes.js");


app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// server 

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected Successfully");
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch ((err) => {
    console.log("Connection failed", err);
});



