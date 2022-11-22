import {useEffect, useState} from "react";

const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollIsActive, setScrollIsActive] = useState(false)

    function updatePosition() {
        setScrollPosition(window.scrollY)
        setScrollIsActive(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    useEffect(() => {
        const scrollStartPosition = scrollPosition;
        const timeoutId = setTimeout(() => {
            if (scrollPosition === scrollStartPosition) {
                setScrollIsActive(false)
            }
        }, 100);
        return () => clearTimeout(timeoutId)
    }, [scrollPosition]);

    return [scrollIsActive, scrollPosition];
};

export default useScroll;