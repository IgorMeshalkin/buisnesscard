import React, {useEffect, useRef} from 'react';
import './Modal.css'
import businessLunch from "../../images/projects/business-lanch.jpg";
import allRealEstate from "../../images/projects/all-real-estate.jpg";
import employeeAccounting from "../../images/projects/employee-accounting.jpg";
import multithreadingGame from "../../images/projects/multithreading-game.jpg";
import realtorCalculator from "../../images/projects/realtor-calculator.jpg";

const Modal = ({active, setActive, project}) => {
    const modalWindow = useRef()
    useEffect(() => {
        modalWindow.current.addEventListener('dblclick', (event) => setActive(!active));
        return () => {
            modalWindow.current.removeEventListener('dblclick', (event) => setActive(!active));
        }
    }, [active])

    function Picture() {
        if (project.name === 'Business Lunch') {
            return <img src={businessLunch} className="modalWindow"/>
        } else if (project.name === 'All real estate') {
            return <img src={allRealEstate} className="modalWindow"/>
        } else if (project.name === 'Employee accounting') {
            return <img src={employeeAccounting} className="modalWindow"/>
        } else if (project.name === 'Multithreading game') {
            return <img src={multithreadingGame} className="modalWindow"/>
        } else {
            return <img src={realtorCalculator} className="modalWindow"/>
        }
    }

    return (
        <div className={active ? 'background active' : 'background'} onClick={() => setActive(false)}>
            <div className={active ? 'window active' : 'window'} onClick={event => event.stopPropagation()}
                 ref={modalWindow}>
                <Picture/>
            </div>
        </div>
    );
};

export default Modal;