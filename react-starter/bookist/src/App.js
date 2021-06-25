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

  addToShelf(input) {
    if (!this.state.shelf.includes(input)) {
      let copyShelf = [...this.state.shelf, input];
      this.setState({ shelf: copyShelf })
    }
  }

  clearShelf = () => {
    let shelf = [];
    this.setState({ shelf: shelf })
  }

  filterBooks = (input) => {
    let books = this.state.books;
    let lowerInput = input.toLowerCase();
    let filteredBooks = books.filter(element => element.title.toLowerCase().includes(lowerInput)
      || element.author.toLowerCase().includes(lowerInput));
    this.setState({ books: filteredBooks })
  }

  reset = () => {
    this.setState({ books: data })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
        </section>
        <main>
          <BookList books={this.state.books} addToShelf={this.addToShelf} />
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        </main>
      </div>
    );
  };

}


export default App;
