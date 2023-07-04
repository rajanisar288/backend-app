import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const authLogin = async (req, res) => {
  // const { email, password } = await req.body;
  // if (email == "" && password == "") {
  //   res.status(400).json({ message:"Please provide an email address and password to authenticate with your account. :("});
  // } else {
  //   if (email == "dev.m.nisar191@gmail.com" && password == "9546167raaji") {
  //       const userdata = await User.findOne({ email: email})
  //       const token = jwt.sign({ _id: userdata._id , email},process.env.SECRET_KEY,{expiresIn: "20h",});
  //      console.log(token)    
  //       res.status(200).json({
  //       status: true,
  //       message: "success",
  //       user: userdata,
  //       token: token
  //     });
  //   }else{
  //       res.status(400).json({
  //           status: true,
  //           message: "email or password doesn't match :(",
  //         });
  //   }
  // }

  try {
    const { email, password } = await req.body;
    if (email == "" && password == "") {
      res.status(400).json({ message:"Please provide an email address and password to authenticate with your account. :("});
    } else {
      if (email == "dev.m.nisar191@gmail.com" && password == "9546167raaji") {
          const userdata = await User.findOne({ email: email})
          const token = jwt.sign({ _id: userdata._id , email},process.env.SECRET_KEY,{expiresIn: "20h",});
         console.log(token)    
          res.status(200).json({
          status: true,
          message: "success",
          user: userdata,
          token: token
        });
      }else{
          res.status(400).json({
              status: true,
              message: "email or password doesn't match :(",
            });
      }
    }
    

  } catch (error) {
    console.log(error);
  }
};

export default authLogin;
