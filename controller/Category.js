import connection from '../Database.js'

const Category = (req, res) => {
  const profileimage = req.profileimage
  const query = `SELECT * FROM bookscategory`

  connection.query(query, (err, result) => {
    if (err) {
      console.error('Database error:', err)
      return res.status(500).send({ message: 'Internal server error' })
    }

    if (result.length === 0) {
      console.log('No data found')
      return res
        .status(404)
        .send({ message: 'No categories found or under maintenance' })
    }


    return res.render('Category', { title: 'Category', profileimage, result})
  })
}

export default Category
