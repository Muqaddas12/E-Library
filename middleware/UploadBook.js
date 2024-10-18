import connection from "../Database.js";

const UploadBook=(req, res,next) => {
  const { bookimage, bookfile } = req.files
  const { bookid, booktitle, bookauthor, bookgenre } = req.body

console.log(bookimage)
console.log(req.body)

const bookimagepath = bookimage[0].path
  .replace('public\\', '') // Remove the 'public\' part
  .replace(/\\/g, '/') // Replace all backslashes with forward slashes

const bookfilepath = bookfile[0].path
  .replace('public\\', '') // Remove the 'public\' part
  .replace(/\\/g, '/') // Replace all backslashes with forward slashes

  const query=`insert into books (ISBN,title,author,genre,imagepath,filepath) values(?,?,?,?,?,?)`
  connection.query(query,[bookid,booktitle,bookauthor,bookgenre,bookimagepath,bookfilepath],(err,result)=>{
    if(err){
        console.log('database connection failed',err)

    }
    if(result.affectedRows === 0){
        console.log('data insertion failed ',err)

    }
    req.msg='Book Added Sucessfully'
    req.BookCategory=bookgenre
    req.BookImagePath=bookimagepath
    next()
  })


  
}

export default UploadBook
