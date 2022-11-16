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
                        Программирую на Java полтора года. За это время я написал несколько самостоятельных проектов, а
                        так же
                        прошёл стажировку TopJava, где закрепил навыки работы в команде с использованием системы
                        контроля
                        версий git.
                    </div>
                    <div className="aboutMeText">
                        Владею английским языком на уровне чтения документации. В настоящее время продолжаю его
                        изучение.
                    </div>
                    <div className="aboutMeText">
                        Имею развитые soft skills благодаря опыту работы риэлтором и ведению предпринимательской
                        деятельности в прошлом.
                    </div>
                    <div className="aboutMeText">
                        В свободное время занимаюсь спортом. В последнее время особенно увлекаюсь плаванием.
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