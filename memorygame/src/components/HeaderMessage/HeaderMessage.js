import React, {Component } from "react";
import "./HeaderMessage.css";

class HeaderMessage extends Component {
    state ={
        message: "",
        animating: false
    };

    componentGetProps({ score, topScore }) {
        const newState = { animating: true };
        if (score === 0 && topScore === 0) {
            newState.message = "";
        }
        else if (score === 0 && topScore > 0) {
            newState.message = "incorrect";
        }
        else {
            newState.message = "correct";
        }
        this.setState(newState, () =>
        setTimeout(() => this.setState({ animating: false }), 500)
        );
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "Correct Guess!";
            case "incorrect":
                return "Incorrect Guess!";
            default:
                return "Let's Begin!"
        }
    };

    render() {
        return (
            <li className={this.state.animating ? this.state.message : ""}>
                {this.renderMessage()}
            </li>
        );
    }
}

export default HeaderMessage;