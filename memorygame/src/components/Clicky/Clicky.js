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

    resetItem = item => {
        const resetItem = item.map(character => ({ ...character, clicked: false}));
        return this.shuffleItem(resetItem);
    };

    shuffleItem = item => {
        let i = item.length - 1;
        if (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = item[i];
            item[i] = item[j];
            item[j] = temp;
            i--;
        }

        return item;
    };

    handleImageClick = id => {
        let correctGuess = false;
        const newItem = this.state.item.map(character => {
            const newImage = { ...character };
            if (newCharacter.Id === id) {
                if (!newCharacter.clicked) {
                    newCharacter.clicked = true;
                    correctGuess = true;
                }
            }
            return newCharacter;
        });
        correctGuess
            ? this.handleCorrectClick(newItem)
            : this.handleIncorrectClick(newItem);
    };

    render() {
        return (
            <div>
                <Nav score={this.state.score} topScore={this.state.topScore} />
                <Header />
                <Container>
                    {this.state.item.map(character => (
                        <Item
                        key={character.id}
                        id={character.id}
                        shake={!this.state.score && this.state.topScore}
                        handleClick={this.handleCharacterClick}
                        image={character.image}
                        />
                    ))}
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Clicky;