import './App.css';
import PhotoAndGeneralInformation from "./components/PhotoAndGeneralInformation/PhotoAndGeneralInformation";
import AboutMe from "./components/AboutMe/AboutMe";
import Stack from "./components/Stack/Stack";
import MyProjects from "./components/MyProjects/MyProjects";

function App() {

    return (
        <div className="App">
            <PhotoAndGeneralInformation/>
            <AboutMe/>
            <Stack/>
            <MyProjects/>
        </div>
    );
}

export default App;
