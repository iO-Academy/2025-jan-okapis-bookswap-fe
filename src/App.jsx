import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import AddBook from "./pages/AddBook";

export default function App() {
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home claimed="0"/>} />
        <Route path="/claimed" element={<Home claimed="1" />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  ) 
}
// Make Claimed and Home into one component, add props that change URL 
// end bit (query string) into component names above to define which version of component shows.
// Rename component something like "BookDisplayPage"