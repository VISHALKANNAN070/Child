const mongoose = require('mongoose')
const schema = mongoose.Schema;

const new_table_register = new schema(
    {
        name:{
            type:String,
            require:true,
        },
        number:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        }
    }
)

module.exports= mongoose.model("Test_Data_Table",new_table_register);