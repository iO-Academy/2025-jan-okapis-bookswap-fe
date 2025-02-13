import { NavLink } from "react-router-dom";
import H2 from "./H2";

export default function NavLinks({link, text}){
    return(
        <NavLink to={link} className={({ isActive }) => isActive ? "text-green-900" : ""}>
        <H2 text={text} /></NavLink>
    )
}