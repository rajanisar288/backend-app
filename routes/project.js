import  express  from "express";
const router = express.Router()
import verifyValidUser from "../middlewares/authMiddleware.js"
import addProject from "../controllers/project.js"

router.post('/create-project', verifyValidUser , addProject)

export default router