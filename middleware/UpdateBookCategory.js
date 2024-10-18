import connection from '../Database.js'

const UpdateBookCategory = (req, res, next) => {
  const BookCategory = req.BookCategory
  const BookImagePath = req.BookImagePath

  const query = `SELECT * FROM bookscategory WHERE category = ?`

  connection.query(query, [BookCategory], (err, result) => {
    if (err) {
      console.log('Database error:', err)
      return res.status(500).send('Database error')
    }

    // Checking if Category Exists
    if (result.length > 0) {
      console.log('Category Exists')
      next()
   
      // Implement the update logic here if required
    } else {
      // If category does not exist, proceed to insert
      const insertCategoryQuery = `INSERT INTO bookscategory (category, imagepath) VALUES (?, ?)`
      connection.query(
        insertCategoryQuery,
        [BookCategory, BookImagePath],
        (err, result) => {
          if (err) {
            console.log('Database error:', err)
            return res.status(500).send('Failed to insert category')
          }

          if (result.affectedRows === 0) {
            console.log('Category is not updated')
            return res.status(400).send('Category not updated')
          }

          console.log('Category added successfully')
          next() // Proceed to the next middleware or route handler
        }
      )
    }
  })
}

export default UpdateBookCategory
