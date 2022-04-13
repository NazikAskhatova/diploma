import "./NavItem.css";

function NavItem(props) {
  return (
    <li className="NavItem">
      <NavLink to={props.url}
         active={props.active}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavItem;