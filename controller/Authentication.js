import connection from '../Database.js' // Import database connection
import AuthMiddleware from '../utils/SetCookies.js' // Import authentication middleware for cookie handling
import SetCookies from '../utils/SetCookies.js'

class Authentication {
  // Controller for handling user signup
  static PostSignupController(req, res) {
    const user = req.body;

    // Create the cookie for the user
    const result = SetCookies.createCookie(user, res);
    
    // Check if the cookie was successfully created
    if (!result) {
        return res.redirect('/Login/?msg=Login first'); // Redirect if the user is not valid
    }

    // Redirect to the user dashboard if the cookie was set successfully
    res.redirect('/user/Dashboard');
}


  // Controller for handling user login
  static PostLoginController (req, res) {
    let user = req.body // Get user data from request body
    const query = `select * from users where email=? and password=?` // SQL query for user authentication

    // Execute the query to find the user
    connection.query(query, [user.Username, user.Password], (err, result) => {
      if (err) {
        console.error(err) // Log query error
        return res.redirect('/Login/?msg=invalid username or password') // Redirect on error
      }

      if (result.length === 0) {
        // No user found with that email
        return res.redirect('/Login/?msg=invalid username or password') // Redirect if user not found
      }

      // Check if provided username and password match the result
      if (
        !(
          result[0].email === user.Username &&
          result[0].password === user.Password
        )
      ) {
        return res.redirect('/Login/?msg=invalid username or password') // Redirect if credentials do not match
      }
user=result[0]

      // Authentication successful, create a cookie
      AuthMiddleware.createCookie(user, res)
      return res.redirect('/user/Dashboard') // Redirect to user dashboard
    })
  }

  // Controller for rendering the login page
  static GetLoginController (req, res) {
    const token = req.cookies.cid // Retrieve token from cookies

    // Check if the cookie exists
    if (!token) {
      return res.render('Login', { title: 'Login' }) // Render login page if no token found
    }

    // Verify the token
    const verify = AuthMiddleware.verifyCookie(token)
    if (!verify) {
      return res.render('Login', { title: 'Login' }) // Render login page if token verification fails
    }

    const query = `SELECT * FROM users WHERE email = ?` // SQL query to find user by email
    connection.query(query, [verify.username], (err, result) => {
      if (err) {
        console.error('Database query error:', err) // Log database query error
        return res.render('Login', { title: 'Login' }) // Render login page on error
      }

      // Check if a user was found
      if (result.length > 0 && result[0].email === verify.username) {
        return res.redirect('/user/Dashboard') // Redirect to dashboard if user found
      } else {
        // If no user matches, render login page
        return res.render('Login', { title: 'Login' })
      }
    })
  }
}

export default Authentication // Export the Authentication class
