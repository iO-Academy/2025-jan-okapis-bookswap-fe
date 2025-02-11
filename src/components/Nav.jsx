import { Link } from "react-router-dom";
import H1 from "./atoms/H1";

export default function Nav() {
  return (
    <nav className="bg-yellow-500 p-4 flex justify-center md:justify-start">
      <Link to="/"><H1 text="Book Swap Okapi Edition" /></Link>
    </nav>
  );
}
