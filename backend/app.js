const express = require('express');
const bodyparser=require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const emailRoutes = require('./routes/email.js');
require("dotenv").config();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/', emailRoutes);     
       
app.listen(port, () => {
    console.log(`Server running on port ${port}`);         
});         