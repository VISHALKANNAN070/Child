const schema =require('../Models/schema')

const login = async(req,res)=>{
    try{
    const task1 = await schema.collection.findOne({number:req.body.number})
    if(task1.password==req.body.password){
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

const register = async(req,res)=>{
    try{
        const task2 = await schema.collection.findOne({number:req.body.number})
        if(task2.number==req.body.number){
            res.status(400);
            res.redirect("https://vishalkannan070.github.io/Child_Nutrition_Tracker/register/register.html");
        }
    }
    catch{
        const{name,number,password} = req.body;
        const task3 = schema.create({name,number,password});
        res.status(200);
        res.redirect("https://vishalkannan070.github.io/Child_Nutrition_Tracker/");
    }
}

module.exports= {register,login};