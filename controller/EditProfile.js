const EditProfile=(req,res)=>{
    const IconPath='../Images/edit-image.png'
    const userdata=req.userdata
    const profileimage=req.profileimage

res.render('EditProfile',{title:'EditProfile',profileimage,IconPath,userdata})
}


export default EditProfile