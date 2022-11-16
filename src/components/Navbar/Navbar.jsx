import React from 'react';
import './Navbar.css'
import NavButton from "./NavButton/NavButton";
import {forwardRef} from "react";

const Navbar = forwardRef((props, ref) => {
    return (
        <div className="navbarMain" ref={ref}>
            <NavButton onClick={props.onClick}>Начало</NavButton>
            <NavButton onClick={props.onClick}>Обо мне</NavButton>
            <NavButton onClick={props.onClick}>Стек</NavButton>
            <NavButton onClick={props.onClick}>Проекты</NavButton>
        </div>
    );
});

export default Navbar;