const mongoose = require('mongoose')
const schema = mongoose.Schema;

const new_schema = new schema(
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

module.exports= mongoose.model("Main_schema",new_schema);