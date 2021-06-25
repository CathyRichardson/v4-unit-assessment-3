import React from 'react'


class Shelf extends React.Component {

    render() {
       
        let mappedTitles = <p className="shelfMessage">Click on a book cover to add it to your shelf</p>
        if (this.props.shelf.length > 0) {
            mappedTitles = this.props.shelf.map((titleString, index) => <p key={index}>{titleString}</p >);
        }


        return (
            <div className="shelfDiv" >
                <h2>Your Shelf</h2>
                <button onClick={this.props.clearShelf}>clear shelf</button>
                {mappedTitles}
            </div>

        )
    }

}

export default Shelf