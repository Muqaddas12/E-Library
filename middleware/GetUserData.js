import connection from '../Database.js'

const GetUserData = (req, res, next) => {
  const email = req.userdata.email
  const query = `SELECT * FROM users WHERE email = ?`

  connection.query(query, [email], (err, result) => {
    if (err) {
      console.error('Database error:', err)
      return res.status(500).send('Internal Server Error')
    }

    // Check if any user was found
    if (result.length === 0) {
      console.log('User not found')
      return res.status(404).send('404 Not Found')
    }

    req.userdata = result[0] // Set the user data for the next middleware
    next() // Proceed to the next middleware
  })
}

export default GetUserData
