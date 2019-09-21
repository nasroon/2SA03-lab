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
        round : 1,
        completed: false
    }
}

let winrate = 0

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
                this.setState({guess: [], attempt: this.state.attempt + 1 , round: this.state.round +1})
            }
     }
}

regame = () => {
    if(this.state.completed == true){
        this.setState({guess:[], attempt: this.state.attempt + 1 })
        winrate = winrate+1
        document.getElementById("wr").innerHTML = "Win : " + winrate
        this.setState({completed : false})
    }
    //else{
    //    this.setState({guess:[], attempt: 1 })
    //}
}
    render() {
        return (
        <div >
            <h1>ROUND : {this.state.attempt}</h1><br></br><br></br><br></br><br></br><br></br>
        { Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} 
            attempt = {this.state.attempt}
            activationHandler={this.activationHandler} />) }
            <br></br><h2 id="wr">Win : 0</h2>
            <br></br><br></br><h3>{this.state.completed? "Win":""}</h3>
            <h2 className="tooltip">HINT
            <span className="tooltiptext">Name of this lab</span>
            </h2>
            <br></br>
            <button className="button" onClick={this.regame}>Play agian</button>
        </div>
        );
        
    }
}


