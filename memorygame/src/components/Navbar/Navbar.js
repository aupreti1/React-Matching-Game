import React from "react";
import NavMessage from "../NavMessage/NavMessage";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navabr">
        <ul>
            <li className="brand">
                <a href="/">Memory Game</a>
            </li>
            <NavMessage score={props.score} topScore={props.topScore} />
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Navbar;