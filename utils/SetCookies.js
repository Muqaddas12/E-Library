import jwt from 'jsonwebtoken'

const secretKey='Readily'

class SetCookies{
    static createCookie(user, res) {
    if (!user) {
        return null; // Return null if no user is provided
    }

    // Construct the payload for the JWT
    const payload = {
        username: user.username,
        email: user.email,
        name: user.firstname,
    };

    // Sign the JWT using the secret key
    const token = jwt.sign(payload, secretKey);

    // Set the cookie with the JWT token
    res.cookie('cid', token, {
        httpOnly: true, // Prevent client-side access to the cookie
        maxAge: 3600000, // Cookie expiration time (1 hour)
    });
    return true
}


    static verifyCookie(token){
        let verify
        if(!token){
            return null
        }
       try {
     verify = jwt.verify(token, secretKey)

       } catch (error) {
        console.log(error)
        return null
       }
        return verify

    }
}


export default SetCookies