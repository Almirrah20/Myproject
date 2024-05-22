const sessionIdUserMap = new Map();
const jwt = require("jsonwebtoken")
const secretkey = "MyTopScret@007"
function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secretkey)
}
function getUser(token){
    
    if (!token) return null;
    try {
        return jwt.verify(token, secretkey)
    } catch (error) {
            return null
    }
}

module.exports={
    setUser,
    getUser
}