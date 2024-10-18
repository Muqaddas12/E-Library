const CrudBookErrorHandler = (req, res, next) => {
  const AllowedFileTypesImages = ['image/jpg', 'image/jpeg', 'image/png']
  const AllowedFileTypesFile = ['application/pdf']

  // Check if both required files are uploaded
  if (
    !(
      req.files['bookimage'] &&
      req.files['bookimage'].length > 0 &&
      req.files['bookfile'] &&
      req.files['bookfile'].length > 0
    )
  ) {
    return res.redirect('/crudbook/?err=Upload valid file')
  }

  // Access the mimetypes of the uploaded files
  const bookimage = req.files['bookimage'][0].mimetype // Mimetype of the book image
  const bookfile = req.files['bookfile'][0].mimetype // Mimetype of the book file

  // Check if the mimetypes are allowed
  if (
    !(
      AllowedFileTypesImages.includes(bookimage) &&
      AllowedFileTypesFile.includes(bookfile)
    )
  ) {
    return res.redirect('/crudbook/?err=Invalid file type')
  }

  // If all checks pass, call the next middleware
  next()
}

export default CrudBookErrorHandler
