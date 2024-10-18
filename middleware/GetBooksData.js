import connection from "../Database.js";
const GetBookData=(req,res,next)=>{
    const query=`select * from books`
    connection.query(query,(err,result)=>{
        if(err){
            console.log('database error ',err)
            }
        if(result.length===0){
            console.log('data not found in database ')
            res.redirect('/user/Dashboard')
        }
     req.BooksData=result
        next()
    })
}

export default GetBookData