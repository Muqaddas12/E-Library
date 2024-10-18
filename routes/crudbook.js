import express from 'express'
//importing controller
import CrudBookController from '../controller/CrudBookController.js'


// Importing middlewares
import upload from '../utils/multer-setup.js'
import CrudBookErrorHandler from '../middleware/CrudBookErrorHandler.js'
import UploadBook from '../middleware/UploadBook.js'
import UpdateBookCategory from '../middleware/UpdateBookCategory.js'


const crudbook = express.Router()

crudbook
  .get('/', (req, res) => {
    res.render('crudbook', { title: 'CRUD Book' })
  })
  .post(
    '/addbook',
    upload.fields([{ name: 'bookimage' }, { name: 'bookfile' }]),
    CrudBookErrorHandler,UploadBook,UpdateBookCategory,CrudBookController

  )
  .delete('/deletebook',(req,res)=>{
    const {bookid,bookauthor}=req.body
    
  })

export default crudbook
