import connection from '../Database.js'

const GetProfileImage = (req, res, next) => {
  const username = req.userdata.username

  const query = `SELECT profileimage FROM users WHERE username = ?`
  connection.query(query, [username], (err, result) => {
    if (err || !result.length) {
      return res.redirect('/Login/?msg=Login First')
    }

    const buffer = result[0].profileimage
    req.profileimage = `data:image/jpeg;base64,${buffer.toString('base64')}`


    next()
  })
}

export default GetProfileImage
