import './App.css';
import PhotoAndGeneralInformation from "./components/PhotoAndGeneralInformation/PhotoAndGeneralInformation";
import AboutMe from "./components/AboutMe/AboutMe";
import Stack from "./components/Stack/Stack";
import MyProjects from "./components/MyProjects/MyProjects";
import {useEffect, useRef} from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
    const mainPage = useRef()
    const photoAndGeneralRef = useRef()
    const aboutMeRef = useRef()
    const stackRef = useRef()
    const projectsRef = useRef()
    const navbarRef = useRef()

    useEffect(() => {
        const windowWidth = window.innerWidth
        const navbarWidth = navbarRef.current.offsetWidth
        const navbarPosition = (windowWidth / 2) - (navbarWidth / 2)
        navbarRef.current.setAttribute('style', 'left:' + navbarPosition + 'px')
    }, [])

    function scrollHandler(buttonName) {
        switch (buttonName) {
            case 'Начало':
                photoAndGeneralRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case 'Обо мне':
                aboutMeRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case 'Стек':
                stackRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case 'Проекты':
                projectsRef.current.scrollIntoView({behavior: "smooth"})
                break;
        }
    }

    return (
        <div className="App" ref={mainPage}>
            <PhotoAndGeneralInformation ref={photoAndGeneralRef}/>
            <AboutMe ref={aboutMeRef}/>
            <Stack ref={stackRef}/>
            <MyProjects ref={projectsRef}/>
            <Navbar
                ref={navbarRef}
                onClick={scrollHandler}
            />
        </div>
    );
}

export default App;
