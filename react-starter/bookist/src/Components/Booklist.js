
function BookList(props) {

    //callback function for map
    function book(element, index) {
        return (
            <div className="book" key={index}>
                <img src={element.img} alt="book cover" onClick={event => props.addToShelf(element.title)} />
                <h3>{element.title}</h3>
                <h4>{element.author}</h4>
            </div>
        )
    }

    return (
        < div className="bookMap">
            {props.books.map(book)}
        </div >
    )
}

export default BookList;
