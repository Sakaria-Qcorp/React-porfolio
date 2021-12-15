import Picture from './images/Suit.jpeg';
import Skills from "./Skills"
//import "./css/style.css";
//import react
 //import "./"

const Home = () => {
    var openingSM =`I am a UI/UX developer and Programming language enthusiast, with a background in sales and logistics. 
    Recently earned a Certificate in Full Stack Web Development from the University of Minnesota, with developed skills in JavaScript, CSS, React.js, and responsive web design. 
    I have worked in the sales and the transportation industries prior, and have acquired skills such as great communication, organization, working cooperatively with a team and complying to the time limit. I always liked to compartmentalize information and organize tasks at work. Through my background in sales I learned the art of persuasion and became conscious of the way I communicate with others. I worked on my sales skills and became one of the most consistent performers at work statistically. I also learned to handle pressure very well in that environment. You know what they say pressure either makes diamonds or bust pipes. During the coding certificate program there was pressure to understand and learn new concepts within a limited amount of time. I understood the course and concepts well enough to pass with an A. I was able to create projects where we used database technologie such as mongoDB,SQL and built apps applying OOP, MVC and the Mern stack guidelines. I’ll use the skills and experience I have to create user-friendly interfaces while still having organized and easy to review code in the back end. Regardless of the complexity, creating an outline to navigate and meet the needs of each project.`
    return (
        <div className="header">
            <h1 className="intro">Hi! my name is Sakaria Ahmed</h1>
             <img  className="rounded-pill img-fluid primary" src={Picture} alt="" />
             <p>
                 {openingSM}
             
            </p>
          

            <Skills skill1="Communication" skill2="Adaptability" skill3="Creative Problem Solving" skill4="Teamwork" type="Soft Skills"/>
            <Skills skill1="Javascript" skill2="CSS" skill3="HTML" skill4="React" type="Technical Skills"/>
        </div>

    )
}

export default Home
