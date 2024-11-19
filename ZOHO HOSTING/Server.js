const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const login_router = require("./Route/Login_router");
const register_router = require("./Route/Register_router");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MongoDB_URL)
    .then(()=>{
        app.listen(process.env.X_ZOHO_CATALYST_LISTEN_PORT,()=>{
            console.log("DataBase Successfully connected to port " + process.env.X_ZOHO_CATALYST_LISTEN_PORT);
        });
    })
    .catch((e)=>{
        console.log({error : e.message});
    });

    app.use("/login",login_router);
    app.use("/register",register_router);