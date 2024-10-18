import multer from "multer";

const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'./public/BooksData')
    },
    filename:function(req,file,cb){
        const filename=req.body.booktitle
        const ext=file.mimetype.split('/')[1]
        cb(null,`${filename}.${ext}`)
    }
})

const upload=multer({
    storage:storage
})

export default upload