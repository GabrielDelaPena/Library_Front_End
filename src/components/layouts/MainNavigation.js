import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.logo}>Library</h1>
      <ul className={classes.ul}>
        <li>
          <Link to="/" className={classes.link}>
            All Books
          </Link>
        </li>
        <Link to="/newbook" className={classes.link}>
          New Book
        </Link>
      </ul>
    </nav>
  );
}

export default MainNavigation;
