import express from 'express' // Import the Express framework
import Authentication from '../controller/Authentication.js' // Import the Authentication controller
import upload from '../utils/multer-setup.js'
import Signup from '../middleware/Signup.js'

const router = express.Router() // Create a new router instance

// Default route to redirect to the login page
router.get('/', (req, res) => {
  res.redirect('/Login') // Redirect to the login page
})

// Route for handling the login page
router
  .get('/login', Authentication.GetLoginController, (req, res) => {
    res.render('Login') // Render the Login view
  })

  // Route for processing the login form submission
  .post('/Login', Authentication.PostLoginController)

// Route for handling user logout
router.get('/Logout', (req, res) => {
  res.clearCookie('cid') // Clear the authentication cookie
  res.redirect('/Login/?msg=Logout Successfully') // Redirect to login page with a message
})

// Route for processing the signup form submission
router
  .post('/Signup',upload.single('profileimage'),Signup, Authentication.PostSignupController)

  // Route for rendering the signup page
  .get('/Signup', (req, res) => {
    res.render('Signup', { title: 'Signup' }) // Render the Signup view with a title
  })

// Export the router to be used in other parts of the application
export default router
