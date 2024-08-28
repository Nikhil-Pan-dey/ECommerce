const express = require("express")
const router = express.Router()
const userSignUpController = require("../controllers/user/userSignUp") 
const userSignInController = require("../controllers/user/userSignIn")
const userDetailsController = require("../controllers/user/userDetails")
const authToken = require("../middleware/authToken")
const userLogout = require("../controllers/user/userLogout")
const allUserDetails = require("../controllers/user/allUserDetails")
const updateUserRole = require("../controllers/user/updateUserRole")
const UploadProductController = require("../controllers/product/uploadProduct")
const getProductController = require("../controllers/product/getProduct")
const getCategoryProduct = require("../controllers/product/getCategoryProduct")
const getCategoryWiseProduct = require("../controllers/product/getCategoryWiseProduct")
const getProductDetails = require("../controllers/product/getProductDetails")
const addToCartController = require("../controllers/user/addToCartController")
const countAddToCartProduct = require("../controllers/user/countAddToCartProduct")
const addToCartViewProduct = require("../controllers/user/addToCartViewProduct")
const updateAddToCartProduct = require("../controllers/user/updateAddToCartProduct")
const deleteAddToCartProduct = require("../controllers/user/deleteAddToCartProduct")
const searchProduct = require("../controllers/product/searchProduct")
const filterProductController = require("../controllers/product/filterProduct")



router.post("/signup" , userSignUpController)
router.post("/login" , userSignInController)
router.get("/user-details" , authToken ,userDetailsController )
router.get("/userLogout" , userLogout)
router.post("/updateUserRole" , authToken , updateUserRole)
//user Cart
router.post("/deleteAddToCartProduct" , authToken , deleteAddToCartProduct)
router.get("/viewCartProduct" , authToken , addToCartViewProduct)
router.post("/updateAddToCartProduct" , authToken , updateAddToCartProduct)
router.get("/countAddToCartProduct" , authToken , countAddToCartProduct)
router.post("/addToCart" , authToken , addToCartController)
// admin panel
router.get("/all-user" , authToken ,  allUserDetails)


//product
router.post("/upload-product" , authToken , UploadProductController)
router.get("/get-product" , getProductController)
router.get("/get-categoryProduct" , getCategoryProduct)
router.post("/get-categoryWiseProduct" ,getCategoryWiseProduct)
router.post("/product-details" ,getProductDetails)
router.get("/search" , searchProduct)
router.post("/filterProduct" , filterProductController)


module.exports = router 