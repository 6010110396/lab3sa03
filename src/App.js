import React, { Component } from 'react'
import './App.css';
import logo from './logo.svg';

import WordCard from './WordCard';




const word = "Hello"
var wordList = ["Hello","Welcome","Freedom","Robot","Coe","PSU"]

var num  = Math.floor((Math.random()* 4));
class App extends Component {

  render() {
    return (
      <div className="App" style={{backgroundColor: '#d5f4e6',height:'683px'}}>
      
        <header><img src={logo} className="App-logo" alt="logo" /></header>
        <WordCard value={wordList[num]} />
        {console.log(wordList[num])}
        
      
      </div>
    )
  }
}


export default App;