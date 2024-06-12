import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Header(){
    const [isNaVisible, setNavVisibility] = useState(false);
    const [isSmallSceen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");

        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNaVisible);
    };

    return (
        <header className="Header">
            <img src={require("./assets/kittie-transparent.png")} className="Logo" alt="logo" />
            <CSSTransition
                in = {!isSmallSceen || isNaVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
                >
                    <nav className="Nav">
                        <a href="/App">Juega</a>
                        <a href="/IA">Juega contra IA</a>
                        <a href="/Historia">Historia</a>
                        <button></button>
                    </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Cat">
                😸
            </button>
        </header>
    );
}