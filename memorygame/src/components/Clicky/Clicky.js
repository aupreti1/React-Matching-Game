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
        this.setState({ item: this.shuffleData(this.forceUpdate.item) });
    }
}