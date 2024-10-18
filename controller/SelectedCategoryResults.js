import connection from "../Database.js"
const SelectedCategoryResults=(req,res)=>{
const category=Object.keys(req.query)[0]
    console.log(category)
    const query=`select * from books where genre=?`
    connection.query(query,[category],(err,result)=>{
        if(err){
            console.log('database error',err)
          return  res.status(500).send('database error')
        }
        if(result.length===0){
            console.log('data not found')
           return res.status(404).send('404 not found')
        }
        const BooksData=result
        const profileimage=req.profileimage
     res.render('SelectedCategoryResults',{title:'SelectedBookCategory',profileimage,BooksData})
    })
}

export default SelectedCategoryResults