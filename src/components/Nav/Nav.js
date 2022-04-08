import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <div>Jewelry Online Store</div>
      <ul>
        <li><a href="/">Our Map</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Nav;