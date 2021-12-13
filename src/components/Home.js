import Picture from './images/Picture.jpeg';
//import "./css/style.css";
//import react
 //import "./"

const Home = () => {
    return (
        <div className="header">
             <img  className="container-sm primary" src={Picture} alt="" />
             <h4 className="border-left"> 
              My name is Sakaria Ahmed and I started coding in 2013 as a hobby of mine.
            The first language I started on my journey towards computer programming was C#.
            I studied C# from Microsoft's website tutorials and learned the fundimentals from that platform. 
            I'm currently enrolled in the Universaty of Minnesota's coding boot camp for front and back end website development.
            As a young man at my high point I spoke three languages. The languages were English, Kiswahili, and Somali.
            I've never had issue picking up new languages and Im very quick learner. </h4>
            <h3 id="skills"> Skills</h3>
    <ul class="skillsBox">
        <li className="skillsBox">Language acquisition</li>
        <li className="skillsBox">Quick Learner</li>
        <li className="skillsBox">Innovative thinking</li>
        <li className="skillsBox">Attention to detail</li>
        <li className="skillsBox">Patience</li>
    </ul>
        </div>

    )
}

export default Home
