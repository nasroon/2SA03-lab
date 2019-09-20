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
        var str = Array.from(this.props.value),
        ranStr = [],
        i = str.length,
        j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            ranStr.push(str[j]);
            str.splice(j,1);
        }


        return (
        <div>
        { Array.from(ranStr).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>) }
        </div>
        );
    }
}


