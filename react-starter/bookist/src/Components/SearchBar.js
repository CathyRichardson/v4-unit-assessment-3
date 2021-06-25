import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userInput: ''
        }

    }

    handleChange = (e) => {
        let input = e.target.value;
        this.setState({ userInput: input })
    }

    handleClick = () => {
        this.props.filterBooks(this.state.userInput);
    }

    handleClear = () => {
        this.setState({ userInput: '' })
        this.props.reset();
    }

    render() {
        let hasSearch = this.state.userInput.length !== 0;

        const renderClearSearchButton = () => {
            if (hasSearch) {
                return <button onClick={this.handleClear}>clear search</button>;
            } else {
                return <button className="hiddenButton">clear search</button>
            }
        }

        return (
            <div>
                <input onChange={this.handleChange} value={this.state.userInput} />
                <button onClick={this.handleClick}>search</button>
                {renderClearSearchButton()}
            </div>
        )
    }
}