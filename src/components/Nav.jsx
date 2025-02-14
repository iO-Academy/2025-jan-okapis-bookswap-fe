import { Link } from "react-router-dom";
import H1 from "./atoms/H1";
import NavLinks from "./atoms/NavLinks";

export default function Nav() {
  return (
    <nav className="bg-yellow-500 p-4 flex flex-col items-center justify-center md:flex-row md:justify-between">
      <Link to="/"><H1 text="Book Swap Okapi Edition" /></Link>
      <div className="flex flex-col flex-nowrap items-center pt-2 md:flex-row md:justify-start">
        <div className="flex gap-6">
          <NavLinks link="/" text="Available Books" />
          <NavLinks link="/claimed" text="Claimed Books" />
        </div>
        <div className="pt-0 pl-0 md:pt-0 md:pl-6">
          <NavLinks link='/add-book' text="Add Book" />
        </div>
      </div>
    </nav>
  );
}
