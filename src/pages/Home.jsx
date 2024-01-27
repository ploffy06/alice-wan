import NavBar from "../components/NavBar/NavBar";
import "../App.css";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="Home">
                <header>Hello. My name is Alice.</header>
            </div>
        </div>
    )
}

export default Home;