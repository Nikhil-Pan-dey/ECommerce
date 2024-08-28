async function userLogout(req,res){
    try{
        res.clearCookie("token")
        res.json({
            message : "user logged out succesffully",
            error : false,
            success : true,
            data : []
        })
    }catch{
        // console.log(err);
        // console.error(err);
        res.status(500).json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }

    
}

module.exports = userLogout