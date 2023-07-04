import Project from '../models/project.js'

const addProject  = async (req, res)=>{
    const  {project_name , project_detail , project_link ,  project_image, technologies , user_id} = req.body
    if (project_detail !== undefined  && project_name !== undefined && user_id !== undefined){
            const newProject = await Project({
              project_name,
              project_detail,
              project_link,
              project_image,
              technologies,
              user_id,
              technologies:['html', 'css', 'javascript']
            });
            newProject.save()
            res.status(200).send({
                status:true,
                message: 'Project added successfully'
            })
    }else(
        res.status(403).send({
            status:false,
            message: 'must fill in project details'
        })
    )
}

export default addProject