import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    default: 'dev.m.nisar191@gmail.com',
    unique: true
  },
  password: {
    type: String,
    default: '9546167raaji',
    select:false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  profile: {
    type:String,
     
  },
  description:{
    type:String,
  },
  profession: {
    type:String,   
  },
  status: {
    type:String,
  },
  dataOfBirth: {
    type: Date,
  },
  age:{
    type:Number
  },
  mobileNumber:{
    type:Array
  }
  

});




const User = mongoose.model('User', userSchema, 'userData');



// const userObject = new User({
//     name: 'Nisar AHMED',
//     age: 23,
//     email:"dev.m.nisar191@gmail.com",
//     password: '9546167raaji',
//     profile: 'avatar',
//     description:"web developer ",
//     profession:"engineer",
//     status:"single",
//     dataOfBirth: new Date(),
//     mobileNumber:['03091318209', '03052259303']
//   });

//   userObject.save()
//   .then(savedObject => {
//     console.log('Object saved successfully:', savedObject);
//   })
//   .catch(error => {
//     console.error('Error saving object:', error);
//   });

  export default User