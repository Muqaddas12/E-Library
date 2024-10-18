import connection from '../Database.js'
function formatDateToDDMMYY (dateString) {
  // Create a Date object from the date string
  const date = new Date(dateString)

  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0') // Ensure two digits
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const year = String(date.getFullYear()) // Get last two digits of the year

  // Format to DD/MM/YY
  return `${day}/${month}/${year}`
}


const EditPersonalDetails = (req, res) => {
  const { firstname, lastname, dob, email, mobile, gender, address } =
    req.body

    const username=req.userdata.username
    
  const query = `UPDATE users SET firstname=?, lastname=?, dob=?, email=?, mobile=?, gender=?, address=? WHERE username=?`
const formatteddob = formatDateToDDMMYY(dob)




  connection.query(
    query,
    [firstname, lastname, formatteddob, email, mobile, gender, address, username],
    (err, result) => {
      if (err) {
        console.log('Database error:', err)
        return res.status(500).send('Contact Administration')
      }

      // Check if any rows were affected
      if (result.affectedRows === 0) {
        console.log('Username not found')
        return res.status(404).send('404 Username Not Found')
      }

      // Successful update
      res.redirect('/user/EditProfile?res=Details Updated Successfully')
    }
  )
}

export default EditPersonalDetails
