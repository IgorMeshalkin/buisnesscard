import React from 'react';
import './PhotoAndGeneralInformation.css'
import photo from "../../images/photo.png";
import whatsApp from "../../images/whatsapp.png"
import telegram from "../../images/telegram.png"
import {forwardRef} from "react";

const PhotoAndGeneralInformation = forwardRef((props, ref) => {
    function Photo() {
        return <img src={photo} className="photo"/>
    }

    function WhatsApp() {
        return <img src={whatsApp} className="messengerLogo"/>
    }

    function Telegram() {
        return <img src={telegram} className="messengerLogo"/>
    }

    return (
        <div className="photoAndGeneralMain" ref={ref}>
            <div className="leftSide">
                <Photo/>
            </div>
            <div className="rightSide">
                <div className="hello">Здравствуйте, меня зовут</div>
                <div className="myName">Игорь Мешалкин</div>
                <div className="generalText">Я backend программист на Java</div>

                <div className="contacts">
                    <div className="contact">
                        <WhatsApp/>
                        <div className="contactValue">
                            +7-962-500-03-73
                        </div>
                    </div>
                    <div className="contact">
                        <Telegram/>
                        <div className="contactValue">
                            @IgorMeshalkin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PhotoAndGeneralInformation;