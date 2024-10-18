import express from 'express'

//Middlewares
import VerifyCookies from '../middleware/VerifyCookies.js'
import GetProfileImage from '../middleware/GetProfileImage.js'
import GetBookData from '../middleware/GetBooksData.js'
import GetUserData from '../middleware/GetUserData.js'

//Controller
import SupportFormPostController from '../controller/SupportFormPostController.js'
import ReadBook from '../controller/Readbook.js'
import EditProfile from '../controller/EditProfile.js'
import UploadImage from '../controller/UploadImage.js'
import EditPersonalDetails from '../controller/EditPersonalDetails.js'
import Category from '../controller/Category.js'
import SelectedCategoryResults from '../controller/SelectedCategoryResults.js'
import SearchResults from '../controller/SearchResults.js'

//Services
import UserImageUpload from '../utils/UserImageUpload.js'



const router = express.Router()

router.get('/Dashboard',VerifyCookies,GetProfileImage,(req,res)=>{
  const profileimage=req.profileimage
  res.render('Dashboard', { title: 'Dashboard',profileimage })

} )

router.get('/Explore', VerifyCookies, GetProfileImage,GetBookData,(req, res) => {
 const BooksData=req.BooksData
 const profileimage=req.profileimage

  res.render('Explore', { title: 'Explore',profileimage,BooksData})
})
router.get('/Category',VerifyCookies,GetProfileImage,Category)
router.post('/SelectedCategoryResults',(req,res)=>{
 const userchoice = Object.keys(req.query)[0]
 res.redirect(`/user/SelectedCategoryResults?${userchoice}`)

})
router.get('/SelectedCategoryResults',VerifyCookies,GetProfileImage,SelectedCategoryResults)




router.get('/EditProfile',VerifyCookies,GetProfileImage,GetUserData,EditProfile)
router.post('/UploadImage',VerifyCookies,UserImageUpload.single('userimage'),UploadImage)
router.post('/EditPersonalDetails',VerifyCookies,EditPersonalDetails)






router.get('/Support',VerifyCookies,GetProfileImage,(req,res)=>{
  const name=req.userdata.name
  const email = req.userdata.email
  const profileimage = req.profileimage

  res.render('Support',{title:'Support',profileimage,email,name})
  
})
router.post('/Support',SupportFormPostController)



router.get('/ReadBook',VerifyCookies,ReadBook)


router.post('/SearchResults' ,(req,res)=>{
  const SearchKey=Object.keys(req.query)[0]
  res.redirect(`/user/SearchResults?${SearchKey}`)
})

router.get('/SearchResults',VerifyCookies,GetProfileImage,SearchResults)



export default router
