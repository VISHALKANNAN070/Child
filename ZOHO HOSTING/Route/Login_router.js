const express = require('express');
const router = express.Router();
const {table_login} = require("../Logics/Logics")
router.post("/",table_login);

module.exports=router;