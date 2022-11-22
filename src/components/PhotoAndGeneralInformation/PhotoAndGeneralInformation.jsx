import React, {forwardRef} from 'react';
import './PhotoAndGeneralInformation.css'
import photo from "../../images/photo.png";
import whatsApp from "../../images/whatsapp.png"
import telegram from "../../images/telegram.png"

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
                <div className="generalText">Software Developer</div>

                <div className="contacts">
                    <div className="contact">
                        <WhatsApp/>
                        <a className="contactValue" href="https://wa.me/+79625000373" target="_blank">+7-962-500-03-73</a>
                    </div>
                    <div className="contact">
                        <Telegram/>
                        <a className="contactValue" href="https://t.me/IgorMeshalkin" target="_blank">@IgorMeshalkin</a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PhotoAndGeneralInformation;