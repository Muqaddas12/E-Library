import connection from "../Database.js";

const ReadBook=(req,res)=>{
    const Book=req.query.title
    const query=`select * from books where title=?`
    connection.query(query,[Book],(err,result)=>{
        if(err){
            console.log('database error',err)
            res.redirect('/user/Explore')
        }
       
        const bookpath=result[0].filepath


        res.render('ReadBook',{title:'ReadBook',bookpath})
    })
}

export default ReadBook