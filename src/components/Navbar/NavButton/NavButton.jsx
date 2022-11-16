import React from 'react';
import './NavButton.css'

const NavButton = (props) => {
    function click() {
        props.onClick(props.children)
    }

    return (
        <div className="navButtonMain" onClick={click}>
            {props.children}
        </div>
    );
};

export default NavButton;