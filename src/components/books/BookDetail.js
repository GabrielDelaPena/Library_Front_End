import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import classes from "./BookDetail.module.css";
// import BookContext from "../../store/book-context";

function BookDetail() {
  // const bookCtx = useContext(BookContext);
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/book/${bookId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const fetchedBook = data;
        setBook(fetchedBook);
        console.log("Fetched single book");
      });
  }, []);

  const deleteHandler = () => {
    fetch(`http://localhost:8080/deleteBook/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("Book deleted");
      navigate("/");
    });
  };

  return (
    <div className={classes.pageContainer}>
      <div>
        <img className={classes.image} src={book.imageUrl} alt="One Piece" />
      </div>
      <div className={classes.detailContainer}>
        <div className={classes.bookDetail}>
          <label>Title: </label>
          <p>{book.title}</p>
        </div>
        <div className={classes.bookDetail}>
          <label>Author: </label>
          <p>{book.author}</p>
        </div>
        <div className={classes.bookDetail}>
          <label>Date: </label>
          <p>{book.date}</p>
        </div>
        <hr />
        <div className={classes.btnContainer}>
          <button className={classes.btn} onClick={deleteHandler}>
            Delete
          </button>
          <button className={classes.btn}>
          <Link to={`/edit/${bookId}`} className={classes.link}>
            Edit
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
