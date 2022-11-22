import React, {forwardRef, useEffect, useRef, useState} from 'react';
import './MyProjects.css'
import ProjectItem from "../ProjectItem/ProjectItem";
import Arrow from "../UI/Arrows/Arrow";
import Modal from "../Modal/Modal";

const MyProjects = forwardRef((props, ref) => {
    const projectVisor = useRef()
    const projectsLine = useRef()
    const rightArrow = useRef()
    const leftArrow = useRef()
    const leftSignal = useRef()
    const rightSignal = useRef()

    const [projects, setProjects] = useState([
        {
            name: 'Business Lunch',
            description: 'Сайт выбора ресторана для обеда. Выбор осуществляется по рейтингу заведения, опираясь на комментарии или можно найти ресторан с подходящим меню. В настоящее время по ссылке доступен код REST API, идёт работа над UI',
            link: 'https://github.com/IgorMeshalkin/RestaurantVote'
        },
        {
            name: 'All real estate',
            description: 'Spring MVC приложение для обмена данными о продаваемых квартирах. Реализована авторизация с помощью Spring Security, а так же система оценок между пользователями и рейтинг на основе этих оценок.',
            link: 'https://github.com/IgorMeshalkin/AllRealEstage'
        },
        {
            name: 'Employee accounting',
            description: 'Desktop приложение для учёта сотрудников на предприятии. Каждый сотрудник относится к определённому отделу и получает зарплату согласно штатному расписанию в зависимости от занимаемой должности',
            link: 'https://github.com/IgorMeshalkin/EmployeeAccounting'
        },
        {
            name: 'Multithreading game',
            description: 'Программа является модулем многопоточной игры где пользователь должен зарабатывать деньги для своего клана разными способами. Игрок может запустить любое количество событий одновременно, программа гарантирует корректное сохранение данных в базу',
            link: 'https://github.com/IgorMeshalkin/MultithreadingGame'
        },
        {
            name: 'Realtor calculator',
            description: 'Калькулятор параметров сделок с недвижимостью. Предназначен для профессионалов. Активно используется моими бывшими коллегами.',
            link: 'https://github.com/IgorMeshalkin/RealtorCalculator'
        }
    ])
    const [step, setStep] = useState(0)
    const [linePosition, setLinePosition] = useState(0)
    const [lineLength, setLineLength] = useState(0)
    const [modal, setModal] = useState(false)
    const [projectToModal, setProjectToModal] = useState('')
    const [arrowsPressed, setArrowsPressed] = useState({left: false, right: false})
    const [limitPositions, setLimitPositions] = useState({left: true, right: false})

    useEffect(() => {
        setStep(projectVisor.current.offsetWidth)
        setLineLength((projectVisor.current.offsetWidth) * projects.length)
    }, [])

    useEffect(() => {
        if (arrowsPressed.right && limitPositions.right) {
            projectsLine.current.setAttribute('style', 'left:' + (linePosition - 10) + 'px')
            rightSignal.current.setAttribute('style', 'box-shadow: 0 0 30px 10px #847a70;')
        } else if (!arrowsPressed.right) {
            rightSignal.current.setAttribute('style', 'box-shadow: none;')
        }

        if (arrowsPressed.left && limitPositions.left) {
            projectsLine.current.setAttribute('style', 'left:' + (linePosition + 10) + 'px')
            leftSignal.current.setAttribute('style', 'box-shadow: 0 0 30px 10px #847a70;')
        } else if (!arrowsPressed.left) {
            leftSignal.current.setAttribute('style', 'box-shadow: none;')
        }
    }, [arrowsPressed])

    useEffect(() => {
        rightArrow.current.addEventListener('mousedown', (event) => setArrowsPressed({
            ...arrowsPressed,
            right: true
        }));
        rightArrow.current.addEventListener('mouseup', (event) => setArrowsPressed({
            ...arrowsPressed,
            right: false
        }));
        leftArrow.current.addEventListener('mousedown', (event) => setArrowsPressed({
            ...arrowsPressed,
            left: true
        }));
        leftArrow.current.addEventListener('mouseup', (event) => setArrowsPressed({
            ...arrowsPressed,
            left: false
        }));
        return () => {
            rightArrow.current.removeEventListener('mousedown', (event) => setArrowsPressed({
                ...arrowsPressed,
                right: true
            }));
            rightArrow.current.removeEventListener('mouseup', (event) => setArrowsPressed({
                ...arrowsPressed,
                right: false
            }));
            leftArrow.current.removeEventListener('mousedown', (event) => setArrowsPressed({
                ...arrowsPressed,
                left: true
            }));
            leftArrow.current.removeEventListener('mouseup', (event) => setArrowsPressed({
                ...arrowsPressed,
                left: false
            }));
        }
    }, [])

    function openModal(projectToModal) {
        setProjectToModal(projectToModal)
        setModal(!modal)
    }

    function leftMotion() {
        setLimitPositions({...limitPositions, right: false})

        if (linePosition + step > 0) {
            projectsLine.current.setAttribute('style', 'left: 0')
            setLinePosition(0)
            setLimitPositions({...limitPositions, left: true})
            return
        }

        projectsLine.current.setAttribute('style', 'left:' + (linePosition + step) + 'px')
        setLinePosition(linePosition + step)
    }

    function rightMotion() {
        setLimitPositions({...limitPositions, left: false})

        projectsLine.current.setAttribute('style', 'left:' + (linePosition - step) + 'px')
        setLinePosition(linePosition - step)

        if (step === (lineLength - (Math.abs(linePosition)))) {
            const limitRightPosition = lineLength - step
            projectsLine.current.setAttribute('style', 'left:' + (-limitRightPosition) + 'px')
            setLinePosition(-limitRightPosition)
            setLimitPositions({...limitPositions, right: true})
        }
    }

    return (
        <div className="myProjectMain" ref={ref}>
            <div className="paragraphTitle">Мои проекты</div>
            <div className="myProjectBlock">
                <div className="myProjectLeft">
                    <Arrow
                        ref={leftArrow}
                        direction='left'
                        onClick={leftMotion}
                    />
                </div>
                <div className="myProjectCenter" ref={projectVisor}>
                    <div className="projectsLine" ref={projectsLine}>
                        {step !== 0 && projects.map(proj =>
                            <ProjectItem
                                key={proj.name}
                                currentProject={proj}
                                width={step}
                                openModal={openModal}
                            />
                        )}
                    </div>
                    <div className="leftSignal" ref={leftSignal}/>
                    <div className="rightSignal" ref={rightSignal}/>
                </div>
                <div className="myProjectRight">
                    <Arrow
                        ref={rightArrow}
                        direction='right'
                        onClick={rightMotion}
                    />
                </div>
                <Modal
                    active={modal}
                    setActive={setModal}
                    project={projectToModal}
                />
            </div>
        </div>
    );
});

export default MyProjects;