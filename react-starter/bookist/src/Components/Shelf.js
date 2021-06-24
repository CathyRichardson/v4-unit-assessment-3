import React from 'react'


class Shelf extends React.Component {
    constructor() {
        super()
    }
    render() {
        let mappedTitles = this.props.shelf.map( titleString => {<p>titleString</p>})
        
        return (
            <div className="shelfDiv">
               <h2>Your Shelf</h2> 
               <button onClick={this.props.clearShelf}>clear shelf</button>
               {mappedTitles}
            </div>
            
        )
    }

}

export default Shelf