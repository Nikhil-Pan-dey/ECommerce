const uploadProductPermission = require("../../helper/permission")
const productModel = require("../../models/productModel")

async function UploadProductController(req,res){
    try{
        const sessionUserId = req.userId
        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
        let saveProduct;
        if('_id' in req.body){
            const { _id, ...prevProduct} = req.body
            saveProduct = await productModel.findByIdAndUpdate(_id,prevProduct)
        }else{
            const uploadProduct = new productModel(req.body)
            saveProduct = await uploadProduct.save()
        }

        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = UploadProductController