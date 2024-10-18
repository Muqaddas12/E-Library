import connection from '../Database.js'

const SearchResults = (req, res) => {
  const searchKey = Object.keys(req.query)[0]

  // SQL query to allow for partial matches
  const query = `SELECT * FROM books WHERE title LIKE ?`
  const searchValue = `%${searchKey}%` // Using LIKE for partial match

  connection.query(query, [searchValue], (err, results) => {
    if (err) {
      console.error('Database error:', err)
      return res.status(500).send('Database Error: Please try again.')
    }
    if (results.length === 0) {
      console.log('No data found for search key:', searchKey)
      return res.status(404).send('No results found. Try different keywords.')
    }

    const profileimage = req.profileimage // Ensure this is set correctly
    const BooksData = results
    res.render('SearchResults', {
      title: 'Search Results',
      profileimage,
      BooksData
    })
  })
}

export default SearchResults
