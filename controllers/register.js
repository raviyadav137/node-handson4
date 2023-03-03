const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const CONSTANTS=require("../config/constants");

const userRegisterController=function(req,res){
    console.log("Registering USER");
     const userDetails=req.body;
     console.log("recevied user details",userDetails);
     const password=userDetails.password;
     const roundofSalt=10;
     bcrypt.genSalt(roundofSalt,function(err,salt){
      if(err){
        console.log(err)
      }else{
        bcrypt.hash(password,salt,function(err,hashedPassword){
            if(err){
                console.log(err);
            }else{
                console.log("User has registered sucessfully")
                res.send({"hasshedPassword":hashedPassword})
            }
        })
      }
     })
}
module.exports={userRegisterController};