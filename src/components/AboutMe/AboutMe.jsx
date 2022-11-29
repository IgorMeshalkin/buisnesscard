import React, {forwardRef} from 'react';
import './AboutMe.css'
import picture from "../../images/about-me.png";

const AboutMe = forwardRef((props, ref) => {
    function AboutMePicture() {
        return <img src={picture} className="aboutMePicture"/>
    }

    return (
        <div className="aboutMeMain" ref={ref}>
            <div className="paragraphTitle">Обо мне</div>
            <div className="aboutMeBlock">
                <div className="aboutMeLeft">
                    <div className="aboutMeText">
                        Я начал программировать с простых задач на курсе <a href='https://javarush.com' className="link">JavaRush</a>. Позже, с ростом интереса,
                        углублялся в сопутствующие технологии и фреймворки. В первую очередь Spring Framework.
                    </div>
                    <div className="aboutMeText">
                        Изучал базы данных с помощью курсов на <a href='https://stepik.org' className="link">Stepik</a> и вскоре написал свой первый API. Позже мне захотелось самому делать весь цикл работы по созданию web-приложений и я параллельно занялся JavaScript.
                    </div>
                    <div className="aboutMeText">
                        C тех пор я написал несколько самостоятельных проектов, а
                        так же
                        прошёл стажировку <a href='https://topjava.ru/topjava' className="link">TopJava</a>, где закрепил навыки работы в команде с использованием системы
                        контроля
                        версий git.
                    </div>
                    <div className="aboutMeText">
                        Владею английским языком на уровне чтения документации. В настоящее время продолжаю его
                        изучение.
                    </div>
                </div>
                <div className="aboutMeRight">
                    <AboutMePicture/>
                </div>
            </div>
        </div>
    );
});

export default AboutMe;