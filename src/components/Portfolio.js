import Projects from "./Projects"
import PokiShot from "./images/GCAVscreenShot.PNG"
import WorkOutImg from "./images/WorkoutTracker.PNG"
import NoteTakerImg from "./images/Notetaker.png"
//import "./css/style.css"


const Portfolio = () => {
    const descriptionPokiGo = `This application uses the weather of whichever city you're in to find out which pokemon would give you an environmental advantage at different times of the day. 
    "As a group we used multiple APIs and combined that to provide the application user that information. We used CSS and HTML to desing the website. 
    We used JavaScript to work with the API's and put it all together.`
   
    const descriptionBudget =`In this app the user will be able to add expenses and deposits to their budget with or without a connection. 
    When the user enters expenses offline the data will populate and update the database once online.`
    
    const descriptionFitness =`In this app you'll be able to view, create and track daily workouts.
     You'll also be able to log multiple exercises in a workout on a given day and track the name, type, sets, reps, and duration of the exercise.`
    
     const descriptionNote= `An application that can be used to write and save notes. This application is using Express.js and saves and retrieves note data from a JSON file.
                              This application was created with Javascript,Express,Node, and MongoDB`
   
    return (
        <div className="container-fluid d-flex justify-content-center">
              <h1>Portfolio Pojects</h1>
              
          <div className="row">
              <div className="col-md-4">
              <Projects projectName="Gotta-Catch-A-Vibe" Description={descriptionPokiGo} img={PokiShot} projectLink="https://bit.ly/3nrdJC5"repoLink="https://bit.ly/3qNxMg8"Cstyle="container"/>
              </div>
              <div className="col-md-4">
              <Projects projectName="Work-Out-Tracker" Description={descriptionFitness} img={WorkOutImg} projectLink="https://bit.ly/3ciLTBA"repoLink="https://bit.ly/3nq1dCQ"Cstyle="container"/>
              </div>
              <div className="col-md-4">
              <Projects projectName="Budget-Tracker" Description={descriptionBudget} img={PokiShot} projectLink="https://bit.ly/3nq3Cxm "repoLink="https://bit.ly/3qUnLxo"Cstyle="container"/> 
              </div>
              <div className="col-md-4">
              <Projects projectName="Note-Taker" Description={descriptionNote} img={NoteTakerImg} projectLink="https://bit.ly/3wZzcVU"repoLink="https://bit.ly/3DqQbm9"Cstyle="container"/>
              </div>
          </div>
            
        </div>
    )
}

export default Portfolio
