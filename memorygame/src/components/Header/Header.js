import React from "react";
import "./Header.css";
import NavMessage from "../HeaderMessage/HeaderMessage";

const Header = props => (
    <header className="header">
        <h1>
            Archer's Clicky Game!
        </h1>
        <h2>
            Click On A Pic To Begin
        </h2>
        <h3>
            <NavMessage score={props.score} topScore={props.topScore} />
            Score: {props.score} | Top Score: {props.topScore}
        </h3>
    </header>
);


export default Header;