const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// app.get('/', (req, res)=>{
//     res.send("Hello World!");
// });

// app.get('/employees', (req, res)=>{
//     res.send("employees");
// });


const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

//route

app.use('/', require('./Routes/index'));
app.listen(3000);
