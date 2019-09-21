import React, { Component } from 'react';
import './App.css';

import WordCard from './WordCard';
class App extends Component {
  
  render() {
    return (
    <div className= "App">
      
      <WordCard value="react"/>
    </div>
    );
   }
   
}
export default App;
