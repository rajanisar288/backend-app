import dotenv from 'dotenv';
dotenv.config();
import express  from "express";
// import bodyParser from "body-Parser";
import connectionDb from "./config/connectionDb.js"
import cors from "cors";
const app = express();
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:4200/',
// }))
const PORT = process.env.PORT || 5000;
connectionDb(process.env.URL)
import authRoutes from "./routes/authRoutes.js"
import projectRoutes from "./routes/project.js"



// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json());

// handle route
app.use('/api/v2' , authRoutes)
app.use('/api/v2' , projectRoutes)

app.get('/api/v2' , (req,res) => {
    res.send({
        message: 'works'
    });
})

app.listen(PORT, ()=>console.log('app running on port ', PORT));