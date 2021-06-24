import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/Booklist';
import Shelf from './Components/Shelf';
import data from './data.js'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this);
  }

  addToShelf (input) {
    let copyShelf = [...this.state.shelf, input];
    this.setState({shelf: copyShelf})
  }

  clearShelf = () => {
    let shelf = [];
    this.setState({shelf: shelf})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <SearchBar />
        </section>
        <main>
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          {/* {console.log(this.state.shelf)} */}
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
        </main>
      </div>
    );
  };

}


export default App;
