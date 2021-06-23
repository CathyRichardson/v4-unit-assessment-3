import App from "../App";

function BookList(props) {

    function book(book, index) {
        return (
            <div className="book" key={index}>
                <img src={book.img} />
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
            </div>
        )
    }

    return (
        < div className="bookMap">
            {props.books.map((e, i) => book(e, i))}
        </div >

    )
}

export default BookList;