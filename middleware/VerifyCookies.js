
import SetCookies from "../utils/SetCookies.js";

const VerifyCookies=(req,res,next)=>{
    if (!req.cookies) {
  return res.redirect('/Login')
}
const token = req.cookies.cid //cid is the name of my cookie

const verify = SetCookies.verifyCookie(token)
if (!verify) {
  return res.redirect('/Login') // Redirect if the token is invalid
}

req.userdata=verify
next()
}

export default VerifyCookies