import React from 'react';
import './AboutMe.css'
import picture from "../../images/about-me.png";

const AboutMe = () => {
    function AboutMePicture() {
        return <img src={picture} className="aboutMePicture"/>
    }

    return (
        <div className="aboutMeMain">
            <div className="paragraphTitle">О себе</div>
            <div className="aboutMeBlock">
                <div className="aboutMeLeft">
                    <div className="aboutMeText">
                        Программирую на Java полтора года. За это время написал несколько самостоятельных проектов, а
                        так же
                        прошёл стажировку TopJava, где закрепил навыки работы в команде с использованием систем контроля
                        версий.
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
                        В свободное время занимаюсь спортом, увлекаюсь плаванием.
                        Но большую часть времени посвящаю развитию навыков программирования.
                    </div>
                </div>
                <div className="aboutMeRight">
                    <AboutMePicture/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;