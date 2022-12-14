import React, {forwardRef} from 'react';
import './Stack.css'
import picture from '../../images/stack.png'

const Stack = forwardRef((props, ref) => {
    function StackPicture() {
        return <img src={picture} className="stackPicture"/>
    }

    return (
        <div className="stackMain" ref={ref}>
            <div className="paragraphTitle">Мой стек</div>
            <div className="stackBlock">
                <div className="stackLeft">
                    <StackPicture/>
                </div>
                <div className="stackRight">
                    <table>
                        <tr>
                            <td>Spring Core</td>
                            <td>SQL(MySQL/Postgres)</td>
                        </tr>
                        <tr>
                            <td>Spring Security</td>
                            <td>JDBC API</td>
                        </tr>
                        <tr>
                            <td>Spring Data JPA</td>
                            <td>Hibernate</td>
                        </tr>
                        <tr>
                            <td>Spring Boot</td>
                            <td>Swing/JavaFX</td>
                        </tr>
                        <tr>
                            <td>ApacheMaven</td>
                            <td>JUnit/Mockito</td>
                        </tr>
                    </table>
                </div>
                <div className="stackFooter">
                    К тому же я уверенно владею HTML, CSS и Javascript. Эта страница, к примеру, является React
                    приложением.
                </div>
            </div>
        </div>
    );
});

export default Stack;