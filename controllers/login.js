const jwt=require("jsonwebtoken");
const CONSTANTS=require("../config/constants");

const userLoginController=function(req,res){
    console.log("Login sucessfull");
    const loginData=req.body;
    if(loginData.username && loginData.password){
        const jwtToken=jwt.sign(loginData,CONSTANTS.SECRET_KEY);
        return res.status(200).send({"token":jwtToken});
            }
            else{
                return res.status(400).send({message:"Invalid credentials"});
            }
}
module.exports={userLoginController};