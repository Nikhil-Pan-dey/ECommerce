const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
async function userSignInController(req , res){
    
    try{
        const {email , password} = req.body
        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }

        const user =  await userModel.findOne({email})

        if(!user){   
            throw new Error("user not found")
        }

        const checkPassword = await bcrypt.compare(password , user.password)
        if(checkPassword){
            const tokenData ={
                _id : user._id,
                email : user.email,
            }
            const token = jwt.sign(tokenData , process.env.TOKEN_SECRET_KEY , {expiresIn : 60*60*8})
            const tokenOption = {
                httpOnly : true,
                // secure : true
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict' // Adjust according to your needs
            }
            // console.log("token in sign in controller is ", token)
            res.cookie('token', token , tokenOption ).status(200    ).json({
                data : token , 
                success : true , 
                error: false , 
                message : "user logged in successfully"
            })
            
        
        }else{
            throw new Error("Email/Password is incorrect")
        }
    }catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignInController