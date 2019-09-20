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
    
    activationHandler = c => { console.log(`${c} has been activated.`) }
    render() {
        var str = this.props.value
        var ranStr = str[Math.floor(Math.random()*str.length)]
        //var reStr = x.replace(/o/g,"-")
        return (
        <div>
        { Array.from(ranStr).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>) }
        </div>
        );
    }
}


