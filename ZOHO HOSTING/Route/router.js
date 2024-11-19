const express = require('express')
const login_router= express.Router()
const register_router= express.Router()
const {register,login}  = require('../Logics/Logics');

login_router.post("/",login)
register_router.post("/",register)

module.exports={login_router,register_router};