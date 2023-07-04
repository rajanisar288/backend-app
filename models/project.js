import mongoose  from 'mongoose';

const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
  },
  project_detail: {
      type: String,
  },
  project_link: {
    type: String,
    default: 'link is not available'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
 
  project_image: {
    type:String,
    default:"image is not available"   
  },
  technologies: {
    type:Array
  },
  user_id: {
    type:String,
  }
});




const Project = mongoose.model('Projects', projectSchema, 'projects');
export default Project