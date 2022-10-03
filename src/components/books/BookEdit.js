import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import classes from "./BookEdit.module.css";

function BookEdit() {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  const title = useRef();
  const author = useRef();
  const imageUrl = useRef();
  const date = useRef();
  const description = useRef();

  const fetchedBookData = () => {
    fetch(`http://localhost:8080/book/${bookId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBook(data);
        console.log("Book data fetched");
      });
  };

  useEffect(() => {
    fetchedBookData();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = title.current.value;
    const enteredAuthor = author.current.value;
    const enteredImageUrl = imageUrl.current.value;
    const enteredDate = date.current.value;

    const editedBook = {
      title: enteredTitle,
      author: enteredAuthor,
      imageUrl: enteredImageUrl,
      date: enteredDate,
    };

    fetch(`http://localhost:8080/editBook/${bookId}`, {
      method: "PUT",
      body: JSON.stringify(editedBook),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      navigate(`/book/${bookId}`);
    });

    console.log(editedBook);
  };

  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
      <div className={classes.inputField}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" defaultValue={book.title} ref={title} />
      </div>
      <div className={classes.inputField}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          defaultValue={book.author}
          ref={author}
        />
      </div>
      <div className={classes.inputField}>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          defaultValue={book.imageUrl}
          ref={imageUrl}
        />
      </div>
      <div className={classes.inputField}>
        <label htmlFor="year">Year</label>
        <input type="text" id="year" defaultValue={book.date} ref={date} />
      </div>
      <div>
        <button className={classes.btn}>Save Book</button>
      </div>
    </form>
  );
}

export default BookEdit;
