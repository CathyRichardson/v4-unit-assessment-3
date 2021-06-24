import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userinput: ''
        }

    }

    handleChange = (e) => {
        let input = e.target.value;
        this.setState({ userinput: input })
    }

    handleClick = () => {
        this.props.filterBooks(this.state.userinput); 
    }

    handleClear = () => {
        this.setState({userinput: ''})
        this.props.reset();
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.userinput}/>
                <button onClick={this.handleClick}>search</button>
                <button onClick={this.handleClear}>clear search</button>
            </div>
        )
    }
}