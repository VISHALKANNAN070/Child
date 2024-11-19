const register=require('../Models/register_table')

const create_table_login = async(req,res)=>{
    try{
    const task = await register.collection.findOne({number:req.body.number})
    if(task.password==req.body.password){
        res.status(200);
        res.send("<h1>LOGIN Succesfully</h1>")
    }
    else{
        res.status(400);
        res.send("<h1>Incorrect password</h1>");
    }
    }
    catch{
        res.status(400);
        res.send("<h1>Incorrect Credentials</h1>")
    }
}

const create_table_register = async(req,res)=>{
    const{name,number,password} = req.body;
    try{
        const task = await register.create({name,number,password});
        res.status(200);
        res.redirect("https://vickyy234.github.io/Sample1/");
    }
    catch(e){
        res.status(400);
        res.send({error:e.message});
    }
}

module.exports= {create_table_register,create_table_login};