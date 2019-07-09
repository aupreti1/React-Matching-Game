import React, { Component } from "react";
import Container from "../Container/Container";
import Footer from "../Footer/";
import Header from "../Header/Header";
import Item from "../Item/Item";

class Clicky extends Component {
    state = {
        item,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ item: this.shuffleItem(this.forceUpdate.item) });
    }

    handleCorrectClick = newItem => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
            item: this.shuffleItem(newItem),
            score: newScore,
            topScore: newTopScore
        });
    };

    handleIncorrectClick = item => {
        this.setState({
            item: this.resetItem(item),
            score: 0
        });
    };
}