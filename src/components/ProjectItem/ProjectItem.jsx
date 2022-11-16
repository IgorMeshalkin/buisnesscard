import React, {useEffect, useRef, useState} from 'react';
import './ProjectItem.css'
import allRealEstate from '../../images/projects/all-real-estate.jpg'
import employeeAccounting from '../../images/projects/employee-accounting.jpg'
import multithreadingGame from '../../images/projects/multithreading-game.jpg'
import businessLunch from '../../images/projects/business-lanch.jpg'
import realtorCalculator from '../../images/projects/realtor-calculator.jpg'
import Modal from "../Modal/Modal";

const ProjectItem = ({currentProject, width, openModal}) => {
    const projectItemMain = useRef()
    const [project, setProject] = useState('')

    useEffect(() => {
        setProject(currentProject)
        projectItemMain.current.setAttribute('style', 'width:' + width + 'px')
    }, [])

    function getProjectToModal() {
        openModal(project)
    }

    function Picture() {
        if (project.name === 'Business Lunch') {
            return <img src={businessLunch} className="businessLunchScreenShot" onClick={getProjectToModal}/>
        } else if (project.name === 'All real estate') {
            return <img src={allRealEstate} className="allRealEstateScreenShot" onClick={getProjectToModal}/>
        } else if (project.name === 'Employee accounting') {
            return <img src={employeeAccounting} className="employeeAccountingScreenShot" onClick={getProjectToModal}/>
        } else if (project.name === 'Multithreading game') {
            return <img src={multithreadingGame} className="multithreadingGameScreenShot" onClick={getProjectToModal}/>
        } else {
            return <img src={realtorCalculator} className="realtorCalculatorScreenShot" onClick={getProjectToModal}/>
        }
    }

    return (
        <div className="projectItemMain" ref={projectItemMain}>
            <div className="projectItemName">{project.name}</div>
            <Picture/>
            <div className="projectItemDescription">{project.description}</div>
            <a className="projectItemLink" href={project.link}>Ссылка на GitHub</a>
        </div>
    );
};

export default ProjectItem;