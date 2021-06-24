import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userinput: ''
        }

    }

    render() {
        return(
            <div>
                <input />
                <button>search</button>
                <button >clear search</button>
            </div>
        )
    }
}