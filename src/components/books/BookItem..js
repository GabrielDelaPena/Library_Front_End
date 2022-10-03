import { Link } from "react-router-dom";

import classes from "./BookItem.module.css";

function BookItem(props) {
  const book = props.book;

  return (
    <li className={classes.item}>
      <div>
        <img src={book.imageUrl} className={classes.image} alt={book.title} />
      </div>
      <div className={classes.title}>
        <p>{book.title}</p>
      </div>
      <div className={classes.btnContainer}>
        {/* <Link to={`/book/${book._id}`} className={classes.btn}>
          Show Detail
        </Link> */}
        <button className={classes.btn}>
          <Link to={`/book/${book.id}`} className={classes.link}>
            Show Detail
          </Link>
        </button>
      </div>
    </li>
  );
}

export default BookItem;
