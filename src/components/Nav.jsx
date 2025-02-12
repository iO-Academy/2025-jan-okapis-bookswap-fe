import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import H1 from "./atoms/H1";
import H2 from "./atoms/H2";

export default function Nav() {
  return (
    <nav className="bg-yellow-500 p-4 flex flex-col items-center justify-center md:flex-row md:justify-between">
      <Link to="/"><H1 text="Book Swap Okapi Edition" /></Link>

      <div className="flex items-center pt-2 gap-6 md:justify-start">
        <div>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : "bg-pink-900"}>
          <H2 text="Available books" /></NavLink>
        </div>
        <div>
          <NavLink to="/claimed" className={({ isActive }) => isActive ? "active" : ""}> 
          <H2 text="Claimed books" /></NavLink>
        </div>
      </div>
    </nav>
  );
}
