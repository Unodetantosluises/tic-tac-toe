import React from "react";

export default function Header(){
    return (
        <header className="Header">
            <img src={require("./assets/kittie-transparent.png")} className="Logo" alt="logo" />
            <nav className="Nav">
                <a href="/">Juega</a>
                <a href="/">Juega contra IA</a>
                <a href="/">Historia</a>
            </nav>
        </header>
    );
}