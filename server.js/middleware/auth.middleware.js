const {getUser} = require("../service/auth.service");

const restrictToLoggedInUserOnly =  async (req, res, next)=>{
    const userUid = req.headers['authorization']?.split('Bearer ')[1];

     if(!userUid) {
        return res.redirect("/login")
    }
    const user = getUser(userUid);
    if(!user) {
        return res.redirect("/login")
    }
    req.user = user;
    next();
} 

module.exports ={
    restrictToLoggedInUserOnly
}