const express = require('express')
const router = express.Router();
const {create_table_login} = require("../Logics/Logics")
router.post("/",create_table_login);

module.exports=router;