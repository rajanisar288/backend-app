import jwt  from 'jsonwebtoken';
import User from '../models/user.js';

const verifyValidUser = async (req, res, next)=>{
    const verifyUser = req.headers['authorization']
    if (verifyUser && verifyUser !== undefined){
        const token = verifyUser.split(" ");
        const userToken = token[1]
        jwt.verify(userToken ,process.env.SECRET_KEY, async (err, tokenData)=>{
            if (err) {
                console.log(err)
                res.status(403).send({
                    status: false,
                    message: 'Invalid token'
                })
            }else{
               const verifyCurrentUser = await tokenData._id
               const user  = await User.findOne({ _id:verifyCurrentUser})
               if (user !== undefined && user !== null){
                next()
               }else{
                res.status(401).send({
                    status: false, message: 'token is invalid'
                })
               }
                
            }
        })
        
    }else{
        res.status(401).send({
            status: false,
            message: 'Authorization required'
        })
    }
}

export default verifyValidUser;