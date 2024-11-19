const register=require('../Models/register_table')

const table_login = async(req,res)=>{
    try{
    const task = await register.collection.findOne({number:req.body.number})
    if(task.password==req.body.password){
        res.status(200);            
        res.redirect("https://vishalkannan070.github.io/Child_Nutrition_Tracker/menu/menu.html");
    }
    else{
        res.status(400);
        res.send("<h1>Incorrect password</h1>");
    }
}
catch{
    res.status(400);
    res.send("<h1>Incorrect Credentials</h1>");
}
}

const create_table_register = async(req,res)=>{
    try{
        const task1 = await register.collection.findOne({number:req.body.number})
        if(task1.number==req.body.number){
            res.status(400);
            res.redirect("https://vishalkannan070.github.io/Child_Nutrition_Tracker/register/register.html");
        }
    }
    catch{
        const{name,number,password} = req.body;
        const task2 = register.create({name,number,password});
        res.status(200);
        res.redirect("https://vishalkannan070.github.io/Child_Nutrition_Tracker/");
    }
}

module.exports= {create_table_register,table_login};