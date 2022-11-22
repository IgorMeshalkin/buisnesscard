import React, {forwardRef} from 'react';
import './Navbar.css'
import NavButton from "./NavButton/NavButton";
import useScroll from "../../hooks/UseScroll";

const Navbar = forwardRef((props, ref) => {
    const [scrollIsActive, scrollPosition] = useScroll()

    return (
        <div className={scrollIsActive || scrollPosition < 100 ? "navbarMain none" : "navbarMain"} ref={ref}>
            <NavButton onClick={props.onClick}>Начало</NavButton>
            <NavButton onClick={props.onClick}>Обо мне</NavButton>
            <NavButton onClick={props.onClick}>Стек</NavButton>
            <NavButton onClick={props.onClick}>Проекты</NavButton>
        </div>
    );
});

export default Navbar;