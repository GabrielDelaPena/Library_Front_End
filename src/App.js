import { Routes, Route } from "react-router-dom";
import BookDetail from "./components/books/BookDetail";
import BookEdit from "./components/books/BookEdit";

import MainNavigation from "./components/layouts/MainNavigation";
import AllBooks from "./pages/AllBooks";
import NewBook from "./pages/NewBook";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllBooks />} />
        <Route path="/newbook" element={<NewBook />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        <Route path="/edit/:bookId" element={<BookEdit />} />
      </Routes>
    </div>
  );
}

export default App;
