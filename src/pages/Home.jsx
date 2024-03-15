import NavBar from "../components/NavBar/NavBar";
import "../App.css";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="Home">
                <header>Hello. My name is Alice.</header>
                <p>In my free time, I like to read books and watch movies.</p>
            </div>
        </div>
    )
}

export default Home;