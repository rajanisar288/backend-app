import mongoose from "mongoose";

//connection Mongodb
const connectionDb = (URL)=>{
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));
    }
    
    export default connectionDb