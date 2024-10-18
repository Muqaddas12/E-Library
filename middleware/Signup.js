import connection from "../Database.js"
const Signup=(req, res, next) => {
  console.log(req.body) // Log request body for debugging
  console.log(req.file) // Log uploaded file for debugging

  // Destructure required fields from request body
  const {
    firstname,
    lastname,
    day,
    month,
    year,
    gender,
    username,
    email,
    password
  } = req.body
  const dob = `${day}/${month}/${year}` // Format date of birth
  const profileimage = req.file ? req.file.buffer : null // Safely access the file buffer

  console.log(profileimage) // Log profile image buffer for debugging

  const AllowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg']

  // Check for missing fields
  if (
    !firstname ||
    !lastname ||
    !day ||
    !month ||
    !year ||
    !gender ||
    !username ||
    !email ||
    !password
  ) {
    return res.redirect('/Signup/?msg=fill all fields')
  }

  // Check for file presence and valid type
  if (!req.file || !AllowedFileTypes.includes(req.file.mimetype)) {
    return res.redirect(
      '/Signup/?msg=invalid file type Choose different filetype'
    )
  }

  // SQL query for inserting a new user
  const query = `
    INSERT INTO users(firstname, lastname, dob, email, username, password, gender, profileimage) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

  // Execute the query to insert user data
  connection.query(
    query,
    [firstname, lastname, dob, email, username, password, gender, profileimage],
    err => {
      if (err) {
        console.log('Database error: ', err) // Log database errors
        return res.redirect('/Signup/?msg=Try Again')
      } else {
        next() // Proceed to the next middleware or route
      }
    }
  )
}


export default Signup