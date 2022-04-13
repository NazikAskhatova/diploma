import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/">Products</NavItem>
        <NavItem url="/">Contacts</NavItem>
        <NavItem url="/">About</NavItem>
        <NavItem url="/">Shop</NavItem>
      </ul>
    </nav>
  )};

export default Nav;