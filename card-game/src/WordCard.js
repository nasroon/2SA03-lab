import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';


const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

    

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    
    activationHandler = (c) => {
        console.log(`${c} has been acctivate`)
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
                console.log("You Win")
            }
            else{
                console.log("Wrong !! Let's play agian")
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }
     }
}


 
    render() {
        return (
        <div>
            
            <h1>ROUND : {this.state.attempt}</h1>
        { Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} 
            attempt = {this.state.attempt}
            activationHandler={this.activationHandler} />) }
            <h3>{this.state.completed? "WIN":""}</h3>
        </div>
        );
        
    }
}


