import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/Booklist';
import Shelf from './Components/Shelf';
import data from './data.js'

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      books: data
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <BookList books={this.state.books}/>
          <Shelf />
        </main>
      </div>
    );
  }

}

export default App;
