import connection from "../Database.js"
const SupportFormPostController=(req,res)=>{
    if(!req.body){
         return res.redirect('/user/Support/?Please%Fill%The%Form')
    }
    const {name,email,problemname,problemdiscription}=req.body
    const query = `insert into userproblem(name,email,problemname,problemdiscription) values(?,?,?,?)`
connection.query(query,[name,email,problemname,problemdiscription],(err,result)=>{
    if(err){
        console.log('database error',err)
        return res.redirect('/user/Support/?Please%Try%Again')

    }
    if(result.length===0){
        console.log('database insertion failed')
        return res.redirect('/user/Support/?Please%Try%Again')

    }
    return res.redirect('/user/Support?Request%20Submitted%20Successfully')

})
}

export default SupportFormPostController