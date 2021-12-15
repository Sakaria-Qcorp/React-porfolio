

const Skills = ({skill1,skill2,skill3,skill4,type}) => {
    const SoftSkills = `Communication, Adabtabillity, Creative Problem Solving, TeamWork`
    const TechSkills =`Javacript,HTML,CSS,BootStrap, React, Node,API's, Jquery, NoSQL,SQL,MongoDB`
    return (
        <div>
            <div className="card">
            <div className="card-header">
              {type} 
           </div>
        <div className="card-body">
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{skill1}</li>
        <li className="list-group-item">{skill2}</li>
        <li className="list-group-item">{skill3}</li>
        <li className="list-group-item">{skill4}</li>
  </ul>
  </div>
   </div>

            
        </div>
    )
}

export default Skills
