const express = require('express');
const router = express.Router();
const {create_table_register} = require("../Logics/Logics");
router.post("/",create_table_register);

module.exports=router;