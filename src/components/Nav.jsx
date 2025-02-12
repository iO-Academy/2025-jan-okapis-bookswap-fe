import { Link } from "react-router-dom";
import H1 from "./atoms/H1";
import NavLinks from "./atoms/NavLinks";

export default function Nav() {
  return (
    <nav className="bg-yellow-500 p-4 flex flex-col items-center justify-center md:flex-row md:justify-between">
      <Link to="/"><H1 text="Book Swap Okapi Edition" /></Link>
      <div className="flex items-center pt-2 gap-6 md:justify-start">
          <div>
          <NavLinks link="/" text="Available Books" />
          </div>
          <div>
          <NavLinks link="/claimed" text="Claimed Books" />
          </div>
      </div>
    </nav>
  );
}
