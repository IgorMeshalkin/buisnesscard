import React, {forwardRef} from 'react';
import './Navbar.css'
import NavButton from "./NavButton/NavButton";
import useScrollPosition from "../../hooks/UseScrollPosition";

const Navbar = forwardRef((props, ref) => {
    const scrollPosition = useScrollPosition()

    return (
        <div className={scrollPosition > 100 ? "navbarMain" : "navbarMain none"} ref={ref}>
            <NavButton onClick={props.onClick}>Начало</NavButton>
            <NavButton onClick={props.onClick}>Обо мне</NavButton>
            <NavButton onClick={props.onClick}>Стек</NavButton>
            <NavButton onClick={props.onClick}>Проекты</NavButton>
        </div>
    );
});

export default Navbar;