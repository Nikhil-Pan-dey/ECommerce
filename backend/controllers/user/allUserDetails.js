const userModel = require("../../models/userModel")

async function allUserDetails(req , res){
    try{ 
        // console.log("i am inside all user details")
        const allUsers = await userModel.find();
        
        res.status(200).json({
            message : "all user details",
            error  :false,
            success : true,
            data : allUsers
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err ,
            error : true,
            success : false
        })
    }
}

module.exports = allUserDetails