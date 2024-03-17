import NavBar from "../components/NavBar/NavBar";
import "../App.css";
import Showcase from "../components/Showcase/Showcase";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="Home">
                <header>Hi. My name is Alice.</header>
                <p>I would like to share some of my work.</p>
                <Showcase />
                <p>I also like to read and watch movies in my free time.</p>
            </div>
        </div>
    )
}

export default Home;