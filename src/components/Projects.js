const Projects = ({projectName,Description,img,projectLink,repoLink,Cstyle}) => {
    return (
        <div className="card text-center" >
           <div className="overflow"> 
           <h6><img src={img} alt=""/> </h6>   
           </div>              
    <div className="card-body text-dark">
        <h2 >{projectName}</h2>
        <p className="card-text secondary-text">{Description}</p>
    </div>
  
    <h6><a className="btn btn-outline success"href= {projectLink}>website</a></h6>
    <h6><a href={repoLink}>Repo</a></h6>
          </div>  
       
    )
}

export default Projects
