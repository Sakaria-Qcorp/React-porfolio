import React from 'react'

const Projects = ({projectName,Description,img,projectLink,repoLink,Cstyle}) => {
    return (
        <div className={Cstyle} >
                 <h2 >{projectName}</h2>
    <h6><img src={img} alt=""/> </h6> 
    <p>{Description}</p>
    <h6><a href= {projectLink}>website</a></h6>
    <h6><a href={repoLink}>Repo</a></h6>
            
        </div>
    )
}

export default Projects
