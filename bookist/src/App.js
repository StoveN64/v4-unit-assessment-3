import React, { Component } from 'react'
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header';
import Shelf from './Components/Shelf';
import './data'
import data from './data';

class App extends Component{
  constructor(){
    super();
    this.state ={
      data: data
    }
  }



  render(){
    return (
      <div className="App">
        <Header/>
        <BookList books={this.state.data}/>
        <Shelf/>
      </div>
    );
  }

  
}

export default App;
