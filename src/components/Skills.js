

const Skills = ({skill1,skill2,skill3,skill4,type}) => {
    const SoftSkills = `Communication, Adabtabillity, Creative Problem Solving, TeamWork`
    const TechSkills =`Javacript,HTML,CSS,BootStrap, React, Node,API's, Jquery, NoSQL,SQL,MongoDB`
    return (
        <div>
            <div class="card">
            <div class="card-header">
              {type} 
           </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">{skill1}</li>
        <li class="list-group-item">{skill2}</li>
        <li class="list-group-item">{skill3}</li>
        <li class="list-group-item">{skill4}</li>
  </ul>
  </div>
   </div>

            
        </div>
    )
}

export default Skills
