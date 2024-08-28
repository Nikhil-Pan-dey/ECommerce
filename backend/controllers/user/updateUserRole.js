const userModel = require("../../models/userModel")

async function updateUserRole(req , res){
    try{
        const sessionUser = req.userId
        const user = await userModel.findById(sessionUser)

        const {userId , email , name , role} = req.body
        const payload ={
            ...(email && {email : email}),
            ...(name && {name : name}),
            ...(role && {role : role}),
        }
        console.log("role is " , role)
        const updateUser = await userModel.findByIdAndUpdate(userId , payload)
        console.log("updated User is " , updateUser)
        res.status(200).json({
            message : "user updated",
            success : true , 
            error : false,
            data : updateUser
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err ,
            error : true,
            success : false
        })
    }
}
module.exports = updateUserRole 